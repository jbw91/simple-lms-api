function createUser(vals){
	return new User(vals);
}

function User(vals){
	this.id = vals.userid;
	this.firstName = vals.firstname;
	this.lastName = vals.lastname;
	this.email = vals.email;
}

module.exports.createUser = createUser;
