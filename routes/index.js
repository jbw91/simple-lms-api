var express = require('express'),
	router = express.Router(),
	User = require('../api/user/controller.js'),
	Test = require('../api/test/controller.js');

// TEST ROUTE
router.get('/api/hello', Test.hello);

// USER ROUTES
router.get('/api/users', User.getUsers);
router.get('/api/users/:id', User.getUserById);
router.post('/api/users', User.addUser);
router.put('/api/users/:id', User.updateUser);
router.delete('/api/users/:id', User.deleteUser);
// USER ROLE ROUTES
router.get('/api/users/:id/roles', User.getUserRoles);
router.put('/api/users/:id/roles/:roleId/group/:groupId', User.addUserRole);
router.delete('/api/users/:id/roles/:roleId/group/:groupid', User.deleteUserRole);

module.exports = router;
