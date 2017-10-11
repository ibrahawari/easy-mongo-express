let baseModel = require('./baseModel');
/**
 * MongoDB model for a text post
 */
class postModel extends baseModel {
    constructor() {
        super('post', {
            title: String,
            description: String
        });
    }
}

module.exports = postModel