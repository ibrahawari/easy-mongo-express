let baseRoute = require('./baseRoute');
let webDataModel = require('../models/webDataModel');
let cheerio = require('cheerio');
let request = require('request');
let _ = require('lodash');
/**
 * Express route for storing text data scraped from websites in mongodb
 */
class webDataRoute extends baseRoute {
    constructor() {
        let dbModel = new webDataModel();
        super(dbModel);
        // Override baseRoute.create
        this.create = (req, res) => {
            request({
                method: 'GET',
                url: req.body.url
            }, function (err, response, body) {
                if (err)
                    res.status(400).send(err);
                let $ = cheerio.load(body);
                req.body.data = _.lowerCase($.text());
                let m = new dbModel.model(req.body);
                m.save((err, data) => {
                    if (err)
                        res.status(400).send(err);
                    res.status(201).send(data);
                });
            });
        }
        this.init();
    }
}

module.exports = webDataRoute;