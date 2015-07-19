var pool = require('../../config/pool.js'),
	user = require('../../models/user.js');

exports.getUsers = function (req, res) {
	var sql = 'SELECT u.userid, u.firstname, u.lastname, u.email, u.roleid, r.description rolename' +
		' FROM user u, roles r' +
		' WHERE u.roleid=r.id';

	pool.run(req, res, sql, function(req,res,result){
		var users = [];
		for(var i = 0; i < result.length; i++) {
			users.push(user.createUser(result[i]));
		}
		res.status(200).json(users);
	});
};

exports.getUserById = function (req, res) {
	var id = req.params.id;
	var sql = 'SELECT u.userid, u.firstname, u.lastname, u.email, u.roleid, r.description rolename' +
		' FROM user u, roles r' +
		' WHERE u.userid=' + id +
		' AND u.roleid=r.id';

	pool.run(req, res, sql, function(req,res,result){
		console.log('RESULT:',result);
		if(result.length === 0) {
			res.status(404).json({message:'User not found.'});
		}
		else {
			res.status(200).json(user.createUser(result[0]));
		}
	});
};

exports.addUser = function (req, res) {
	var newUser = req.body;
	var sql = 'INSERT INTO user (userid, firstname, lastname, email, roleid)' +
	' VALUES (\'' + newUser.id + '\',\'' + newUser.firstName + '\',\'' + newUser.lastName + '\',\'' + newUser.email + '\',' + newUser.role.id + ')';

	pool.run(req, res, sql, function(req,res,result){
		console.log('RESULT:',result);
		res.status(201).json({id:newUser.id});
	});
};

exports.updateUser = function (req, res) {
	var user = req.body;
	var id = req.params.id;
	var sql = 'UPDATE user SET firstname=\'' + user.firstName + '\', lastname=\'' + user.lastName + '\', email=\'' + user.email + '\', roleid=\'' + user.role.id + '\' WHERE userid=\'' + id + '\'';

	pool.run(req, res, sql, function(req,res,result){
		console.log('RESULT:',result);
		res.status(200).end();
	});
};

exports.deleteUser = function (req, res) {
	var id = req.params.id;
	var sql = 'DELETE FROM user WHERE userid=\'' + id + '\'';

	pool.run(req, res, sql, function(req,res,result){
		console.log('RESULT:',result);
		res.status(200).end();
	});
};
