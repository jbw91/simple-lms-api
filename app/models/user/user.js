'use strict';

function User(vals){
	this.id = vals.userid;
	this.firstName = vals.firstname;
	this.lastName = vals.lastname;
	this.email = vals.email;
}

function createUser(vals){
	return new User(vals);
}

module.exports.createUser = createUser;
