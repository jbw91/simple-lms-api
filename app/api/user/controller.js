'use strict';
var pool = require('../../config/pool.js'),
	user = require('../../models/user/user.js'),
	role = require('../../models/user/role.js');

exports.getUsers = function (req, res) {
	var sql = 'SELECT * FROM user';

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
	var sql = 'SELECT * FROM user WHERE userid=\'' + id + '\'';

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
	var sql = 'INSERT INTO user (userid, firstname, lastname, email)' +
	' VALUES (\'' + newUser.id + '\',\'' + newUser.firstName + '\',\'' + newUser.lastName + '\',\'' + newUser.email + '\')';

	pool.run(req, res, sql, function(req,res,result){
		console.log('RESULT:',result);
		res.status(201).json({id:newUser.id});
	});
};

exports.updateUser = function (req, res) {
	var user = req.body;
	var id = req.params.id;
	var sql = 'UPDATE user SET firstname=\'' + user.firstName + '\', lastname=\'' + user.lastName + '\', email=\'' + user.email + '\' WHERE userid=\'' + id + '\'';

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

// TODO: Implement the methods for roles found in ../../routes/index.js
exports.getUserRoles = function (req, res) {
	var sql = 'SELECT u.userid, u.roleid, r.description rolename, u.groupid, g.name groupname, ' +
				'g.grouptype grouptypeid, gt.description grouptypename ' +
				'FROM userroles u, roles r, groups g, grouptypes gt ' +
				'WHERE u.userid=' + req.params.id + ' ' +
				'AND u.roleid=r.id ' +
				'AND u.groupid=g.id ' +
				'AND g.grouptype=gt.id';

	pool.run(req, res, sql, function(req,res,result){
		res.status(200).json(role.createRole(result));
	});
};

exports.addUserRole = function (req, res) {
	res.status(200).json({message:'Not Implemented Yet'});
};

exports.deleteUserRole = function (req, res) {
	res.status(200).json({message:'Not Implemented Yet'});
};
