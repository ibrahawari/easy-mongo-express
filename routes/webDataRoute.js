let baseRoute = require('./baseRoute');
let webDataModel = require('../models/webDataModel');
const { spawn } = require('child_process');
/**
 * Express route for storing data cURL'ed from websites in mongodb
 */
class webDataRoute extends baseRoute {
    constructor() {
        let dbModel = new webDataModel();
        super(dbModel);
        // Override baseRoute.create
        this.create = (req, res) => {
            const child = spawn('curl', [req.body.url]);
            child.stdout.on('data', (data) => {
                req.body.data += data;
            });
            child.on('close', () => {
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