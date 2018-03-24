let baseModel = require('./baseModel');
/**
 * MongoDB model for executing python scripts with npm python-shell
 */
class webDataModel extends baseModel {
  constructor() {
    super('webData', {
      url: { type: String, required: true },
      data: { type: String, required: true }
    });
  }
}

module.exports = webDataModel;