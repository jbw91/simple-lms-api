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

module.exports = router;
