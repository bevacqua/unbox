'use strict';

function setup (app) {
    var profiled = conf('NODETIME_ENABLED');
    var nodetime;

    if (profiled) {
        nodetime = require('nodetime');
        app.use(nodetime.expressErrorHandler());
    }

    app.use(handler);
}

function handler (err, req, res, next) {
    if (req.xhr) {
        res.send(500, { error: 'Internal Server Error!' });
    } else {
        res.send(500, 'Internal Server Error!');
    }
}

module.exports = {
    setup: setup
};
