// Load the module dependencies
'use strict';
var	mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 100,
	host     : 'localhost',
	port     : '8889',
	user     : 'simplelms',
	password : 'simplelmspw',
	database : 'simplelms',
	debug    : false
});

function run(req,res,queryString,callback){
	pool.getConnection(function(err,conn){
		if (err) {
			console.log('Database error');
			var error = {'code' : 100, 'status' : 'Error in connection database'};
			callback(req,res,error);
		}
		conn.query(queryString,function(err,rows){
			console.log(queryString);
			if(err || !req.stopRelease){
				if(err){
					console.log('Error',err);
				}
				conn.release();
			}
			if(!err){
				callback(req,res,rows);
			}
		});
	});
}

exports.run = run;
