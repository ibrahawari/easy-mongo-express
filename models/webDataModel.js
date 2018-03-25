let baseModel = require('./baseModel');
/**
 * MongoDB model for HTML data retrieved from a url
 */
class webDataModel extends baseModel {
  constructor() {
    super('webData', {
      url: { type: String, required: true },
      data: { type: String, required: true },
      text_content: { type: String, required: true },
    });
  }
}

module.exports = webDataModel;