'use strict';

var path = require('path');
var express = require('express');
var app = express();
var controllers = require('./controllers');
var logger = require('../lib/logger');

var port = conf('PORT');
var debug = conf('BUILD_DISTRIBUTION') === 'debug';

var statics = path.join(process.cwd(), 'bin/public');
var favicon = path.join(statics, 'favicon.ico');

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

    if (debug) {
        app.use(express.favicon(favicon));
        app.use(express.static(statics));
    } else {
        logger.info('assuming nginx serves static assets');
    }

    app.listen(port, function(){
        logger.info('express listening on port', port);
    });
});
