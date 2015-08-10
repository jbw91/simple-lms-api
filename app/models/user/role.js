'use strict';

function Role(vals){
	this.userId = vals[0].userid;
	this.roles = [];
	for(var i = 0; i < vals.length; i++) {
		var alreadyExists = false;
		// Look for duplicates
		var group = {};
		for(var j = 0; j < this.roles.length; j++) {
			// Does role already exist?
			if(this.roles[j].id === vals[i].roleid) {
				// Role exists, push new group in same role
				group.id = vals[i].groupid;
				group.name = vals[i].groupname;
				group.groupType = {};
				group.groupType.id = vals[i].grouptypeid;
				group.groupType.name = vals[i].grouptypename;
				this.roles[j].groups.push(group);
				alreadyExists = true;
				break;
			}
		}
		// Role does not exist, so create role and push group
		if(!alreadyExists) {
			var role = {};
			role.id = vals[i].roleid;
			role.name = vals[i].rolename;
			role.groups = [];
			group.id = vals[i].groupid;
			group.name = vals[i].groupname;
			group.groupType = {};
			group.groupType.id = vals[i].grouptypeid;
			group.groupType.name = vals[i].grouptypename;
			role.groups.push(group);
			this.roles.push(role);
		}
	}
}

function createRole(vals){
	return new Role(vals);
}

module.exports.createRole = createRole;
