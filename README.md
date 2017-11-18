# quickserver

A highly flexible express server connected to mongoDB allowing the simple addition of new database models and routes with a focus on the execution of ML python scripts

## install tensorflow

For more please click [here](https://www.tensorflow.org/install/install_mac#installing_with_virtualenv).

```
$ sudo easy_install pip
$ pip install --upgrade virtualenv
$ virtualenv --system-site-packages ~/tensorflow
$ source ~/tensorflow/bin/activate
$ easy_install -U pip
$ pip install --upgrade tensorflow
```

## run

To run the server:

```
$ npm install
$ npm start
```

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
    let dbModel = new postModel();
    super(dbModel);
    // Override baseRoute.read
    this.read = (req, res) => {
      dbModel.model.find({}, (err, data) => {
        if (err)
          res.status(400).send(err);
        res.status(200).send('Hello World!');
      });
    }
    this.init();
  }
}

module.exports = postsRoute;
```