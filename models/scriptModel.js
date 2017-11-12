let baseModel = require('./baseModel');
/**
 * MongoDB model for executing python scripts with npm python-shell
 */
class scriptModel extends baseModel {
  constructor() {
    super('script', {
      args: { type: String, required: true },
      script: { type: String, required: true },
      scriptPath: { type: String, required: true },
      output: { type: String, required: true }
    });
  }
}

module.exports = scriptModel;