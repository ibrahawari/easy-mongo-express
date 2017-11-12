let baseRoute = require('./baseRoute');
let scriptModel = require('../models/scriptModel');
let pythonShell = require('python-shell');
/**
 * Express route for executing python scripts with npm python-shell
 */
class scriptsRoute extends baseRoute {
    constructor() {
        let dbModel = new scriptModel();
        super(dbModel);
        // Override baseRoute.create
        this.create = (req, res) => {
            pythonShell.run(
                req.body.script,
                {
                    scriptPath: req.body.scriptPath,
                    args: req.body.args
                },
                (err, out) => {
                    if (err)
                        res.status(400).send(err);
                    req.body.output = out;
                    let m = new dbModel.model(req.body);
                    m.save((err, data) => {
                        if (err)
                            res.status(400).send(err);
                        res.status(201).send(data);
                    });
                }
            );
        };
        this.init();
    }
}

module.exports = scriptsRoute;