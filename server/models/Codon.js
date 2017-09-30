var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codonSchema = new Schema({

})

var Codon = mongoose.model('codon', codonSchema);

module.exports = Codon;