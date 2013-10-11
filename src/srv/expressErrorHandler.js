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
    var result;
    var info = err.stack ? '\n' + err.stack : ': ' + err;

    if (req.xhr) {
        result = { error: 'Internal Server Error!' };
    } else {
        result = 'Internal Server Error!';
    }

    res.send(500, result);
    logger.info('Error handled on request for %s%s', req.url, info);
}

module.exports = {
    setup: setup
};
