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
      })
    }
    this.init()
  }
}

module.exports = postsRoute;