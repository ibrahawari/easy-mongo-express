let express = require('express');
/**
 * Extend this abstract class with a class extending baseModel
 */
class baseRoute {
  constructor(dbModel) {
    this.router = express.Router();
    this.create = (req, res) => {
      let m = new dbModel.model(req.body)
      m.save((err, data) => {
        if (err)
          res.status(400).send(err);
        res.status(201).send(data);
      })
    }
    this.read = (req, res) => {
      dbModel.model.find({}, (err, data) => {
        if (err)
          res.status(400).send(err);
        res.status(200).send(data);
      })
    }
    this.readOne = (req, res) => {
      dbModel.model.findById(req.params.id, (err, data) => {
        if (err)
          res.status(400).send(err);
        res.status(200).send(data);
      })
    }
    this.update = (req, res) => {
      dbModel.model.where({ _id: req.params.id }).update(req.body, (err, data) => {
        if (err)
          res.status(400).send(err);
        res.status(201).send(data);
      })
    }
    this.delete = (req, res) => {
      dbModel.model.remove({ _id: req.params.id }, (err, data) => {
        if (err)
          res.stauts(400).send(err);
        res.status(200).send(data);
      })
    }
    this.init();
  }
  init() {
    this.router.post('/', this.create);
    this.router.get('/', this.read);
    this.router.get('/:id', this.readOne);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}

module.exports = baseRoute;