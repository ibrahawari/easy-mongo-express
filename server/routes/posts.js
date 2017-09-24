var express = require('express');
var router = express.Router();

var Post = require("../models/Post");

/* GET */
router.get('/', (req, res) => {
  Post.find({}, 'title description', (error, posts) => {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

/* POST */
router.post('/', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })
  new_post.save((error) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

module.exports = router;
