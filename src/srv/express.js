'use strict';

var path = require('path');
var express = require('express');
var app = express();
var controllers = require('./controllers');
var errorHandler = require('./expressErrorHandler.js');

var port = conf('PORT');
var debug = conf('BUILD_DISTRIBUTION') === 'debug';

logger.info('executing:', process.argv.join(' '));
logger.info('environment: %s, distribution: %s, build: %s',
    conf('NODE_ENV'), conf('BUILD_DISTRIBUTION'), conf('BUILD_VERSION')
);

controllers.load(app, function(){
    app.locals.settings['x-powered-by'] = false;

    if (debug) {
        app.use(express.logger({
            format: ':method :url :status',
            stream: logger.stream('debug')
        }));
    }

    app.use(express.compress());
    app.use(express.bodyParser());

    app.use(app.router);

    errorHandler.setup(app);

    if (debug) {
        app.use(express.static('bin/public'));
        app.use(express.favicon('bin/public/favicon.ico'));
    } else {
        logger.info('assuming nginx serves static assets');
    }

    app.listen(port, function(){
        logger.info('express listening on port', port);
    });
});
