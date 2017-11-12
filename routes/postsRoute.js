let baseRoute = require('./baseRoute');
let postModel = require('../models/postModel');
/**
 * Express route for text posts
 */
class postsRoute extends baseRoute {
  constructor() {
    let dbModel = new postModel();
    super(dbModel);
    this.init();
  }
}

module.exports = postsRoute;