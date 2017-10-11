let express = require('express');
var router = express.Router();

let postModel = require("../models/postModel");
let m = new postModel();
var Model = m.model;

/* GET */
router.get('/', (req, res) => {
  Model.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err)
    }
    res.status(200).send(data)
  })
})

/* GET single */
router.get('/:id', (req, res) => {
  Model.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err)
    }
    res.status(200).send(data)
  })
})

/* POST */
router.post('/', (req, res) => {
  let m = new Model(req.body)
  m.save((err, data) => {
    if (err) {
      res.status(400).send(err)
    }
    res.status(201).send(data)
  })
})

/* PUT */
router.put('/:id', (req, res) => {
  Model.where({ _id: req.params.id }).update(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err)
    }
    res.status(201).send(data)
  })
})

/* DELETE */
router.delete('/:id', (req, res) => {
  Model.remove({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.stauts(400).send(err)
    }
    res.status(200).send(data)
  })
})

module.exports = router;
