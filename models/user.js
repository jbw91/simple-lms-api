function createUser(vals){
	return new User(vals);
}

function User(vals){
	this.id = vals.userid;
	this.firstName = vals.firstname;
	this.lastName = vals.lastname;
	this.email = vals.email;
	this.role = {};
	this.role.id = vals.roleid;
	this.role.description = vals.rolename;
}

module.exports.createUser = createUser;
