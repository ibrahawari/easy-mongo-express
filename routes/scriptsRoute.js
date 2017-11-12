let baseRoute = require('./baseRoute');
let scriptModel = require('../models/scriptModel');
/**
 * Express route for executing python scripts with npm python-shell
 */
class scriptsRoute extends baseRoute {
  constructor() {
    let dbModel = new scriptModel();
    super(dbModel);
    // Override baseRoute.read
    this.init();
  }
}

module.exports = scriptsRoute;