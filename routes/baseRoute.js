let express = require('express');
/**
 * Extend this abstract class with a class extending baseModel
 */
class baseRoute {
  constructor(dbModel) {
    this.router = express.Router();
    this.init({
      create: (req, res) => {
        let m = new dbModel.model(req.body)
        m.save((err, data) => {
          if (err)
            res.status(400).send(err);
          res.status(201).send(data);
        })
      },
      read: (req, res) => {
        dbModel.model.find({}, (err, data) => {
          if (err)
            res.status(400).send(err);
          res.status(200).send(data);
        })
      },
      readOne: (req, res) => {
        dbModel.model.findById(req.params.id, (err, data) => {
          if (err)
            res.status(400).send(err);
          res.status(200).send(data);
        })
      },
      update: (req, res) => {
        dbModel.model.where({ _id: req.params.id }).update(req.body, (err, data) => {
          if (err)
            res.status(400).send(err);
          res.status(201).send(data);
        })
      },
      delete: (req, res) => {
        dbModel.model.remove({ _id: req.params.id }, (err, data) => {
          if (err)
            res.stauts(400).send(err);
          res.status(200).send(data);
        })
      }
    });
  }
  init(callbacks) {
    this.router.post('/', callbacks.create);    
    this.router.get('/', callbacks.read);
    this.router.get('/:id', callbacks.readOne);
    this.router.put('/:id', callbacks.update);
    this.router.delete('/:id', callbacks.delete);
  }
}

module.exports = baseRoute;
