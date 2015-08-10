# Simple LMS API

A Node.js and Express API for the Simple LMS project

## Getting Started

Simply clone this repo and then in the directory of the project run the following commands to install node dependencies.

	npm install

Once the installation is complete, simply run the following command to start your server.

	gulp serve

This will start up the node application on port 3000. Simply visit [http://localhost:3000/api/hello](http://localhost:3000/api/hello) to see the Hello World JSON response. While using `gulp serve` any changes you make to the files will automatically reload the server.

## Docker

The Docker integration is still a work in progress. Instructions will be provided when it is working.

## Endpoints

The following are the endpoints in this API, including what you send and what you get back.

### GET /api/users

Returns an array of all users, with the attributes shown below:

```json
[
	{
		"id": "e2c27d533f67",
		"firstName": "John",
		"lastName": "Doe",
		"email": "johndoe@example.com"
	}
]
```

### GET /api/users/{id}

Returns the specified user, with the following attributes:

```json
{
	"id": "e2c27d533f67",
	"firstName": "John",
	"lastName": "Doe",
	"email": "johndoe@example.com"
}
```

### POST /api/users

A successful `POST` returns a 201 Created status code along with an object with an `id` property for the created resource, like the following object:

```json
{
	"id": "e2c27d533f67"
}
```

The structure for the request body you need to `POST` is like the following object:

```json
{
	"id":"e2c27d533f67",
	"firstName":"John",
	"lastName":"Doe",
	"email":"johndoe@example.com"
}
```

### PUT /api/users/{id}

Returns a 200 OK status. For the request body send the same object structure as is outlined in the `POST` above.

### DELETE /api/users/{id}

Returns a 200 OK status. Do not send a request body, simply call a `DELETE` with the id of the user you wish to delete.

**Note: This deletes all info about the user, including classes enrolled, roles, etc. This cannot be recovered.**

### GET /api/users/{id}/roles

Returns an object with the user's id and a list of roles they are currently granted. For each role, there is an array of groups associated with that role. (for example, a user may be an instructor of 3 different classes, so the groups array will list each class) Object looks like the one below:

```json
{
	"userId": "1",
	"roles": [
		{
			"id": 1,
			"name": "Administrator",
			"groups": [
				{
					"id": 1,
					"name": "System",
					"groupType": {
						"id": 1,
						"name": "System"
					}
				}
			]
		},
		{
			"id": 2,
			"name": "Instructor",
			"groups": [
				{
					"id": 2,
					"name": "CS 235",
					"groupType": {
						"id": 2,
						"name": "Class"
					}
				},
				{
					"id": 3,
					"name": "CS 256",
					"groupType": {
						"id": 2,
						"name": "Class"
					}
				},
				{
					"id": 4,
					"name": "IT 101",
					"groupType": {
						"id": 2,
						"name": "Class"
					}
				}
			]
		}
	]
}
```

### PUT /api/users/{id}/roles/{roleId}/group/{groupId}

A `PUT` request to this endpoint will simply return a 200 OK status. No request body is required, simply the path params you provide in the request. It will add the role you provide with its associated group.

### DELETE /api/users/{id}/roles/{roleId}/group/{groupId}

A `DELETE` request to this endpoint will simply return a 200 OK status. No request body is required, simply the path params you provide in the request. It will remove the role you provide that is in your provided group.
