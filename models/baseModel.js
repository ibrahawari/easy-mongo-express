let mongoose = require('mongoose');
/**
 * Extend this abstract class with a name and a schema definition
 */
class baseModel {
  constructor(name, definition) {
    let schema = new mongoose.Schema(definition);
    this.model = mongoose.model(name, schema);
  }
}

module.exports = baseModel;