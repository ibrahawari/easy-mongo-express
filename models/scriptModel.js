let baseModel = require('./baseModel');
/**
 * MongoDB model for executing python scripts with npm python-shell
 */
class scriptModel extends baseModel {
  constructor() {
    super('script', {
      scriptPath: { type: String, required: true },
      args: { type: String, required: true }
    });
  }
}

module.exports = scriptModel;