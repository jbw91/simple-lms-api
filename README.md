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
		"id": "1",
		"firstName": "John",
		"lastName": "Doe",
		"email": "johndoe@email.com"
	}
]
```

### GET /api/users/{id}

Returns the specified user, with the following attributes:

```json
{
	"id": "1",
	"firstName": "John",
	"lastName": "Woodruff",
	"email": "johnwoodruff91@gmail.com"
}
```

### POST /api/users

In progress... 
