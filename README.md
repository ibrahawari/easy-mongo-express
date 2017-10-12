# easy-mongo-express

A highly flexible express server connected to mongoDB allowing the simple addition of new database models and routes.

## add model

In `models`, create a new javascript file to extend the `baseModel`, for example:

```javascript
let baseModel = require('./baseModel');
/**
 * MongoDB model for a text post
 */
class postModel extends baseModel {
  constructor() {
    super('post', {
      title: { type: String, required: true },
      description: { type: String, required: true }
    });
  }
}

module.exports = postModel;
```

## add route

In `routes`, create a new javascript file to extend the `baseRoute`, for example:

```javascript
let baseRoute = require('./baseRoute');
let postModel = require('../models/postModel');
/**
 * Express route for text posts
 */
class postsRoute extends baseRoute {
  constructor() {
    super(new postModel());
  }
}

module.exports = postsRoute;
```

## run

To run the server:

```
npm install
npm start
```
