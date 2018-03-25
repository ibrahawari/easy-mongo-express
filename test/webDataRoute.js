var assert = require('assert');
var httpMocks = require('node-mocks-http')
let webDataRoute = require('../routes/webDataRoute');

describe('webDataRoute', function () {
    let route = new webDataRoute();
    let req = httpMocks.createRequest({
        body: {
            url: 'https://stackoverflow.com'
        } 
    });
    let res = httpMocks.createResponse();
    describe('#create()', function () {
        route.create(req, res);
        var data = JSON.parse(res._getData()); // line doesn't work
        // my guess is the mongodb connection isn't active
    });
});