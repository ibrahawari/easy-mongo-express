var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    description: String
})

var Post = mongoose.model('post', postSchema);

module.exports = Post;