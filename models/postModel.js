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