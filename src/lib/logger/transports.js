'use strict';

var logger = require('winston');
var moment = require('moment');
var pushover = require('winston-pushover').Pushover;
var papertrail = require('winston-papertrail').Papertrail;
var stdout = logger.transports.Console;

logger.remove(stdout);

add(stdout, conf('CONSOLE_ENABLED'), {
    timestamp: timestamps,
    colorize: true,
    level: conf('CONSOLE_LEVEL')
});

add(pushover, conf('PUSHOVER_ENABLED'), {
    level: conf('PUSHOVER_LEVEL'),
    userKey: conf('PUSHOVER_USER_KEY'),
    token: conf('PUSHOVER_API_TOKEN')
});

add(papertrail, conf('PAPERTRAIL_ENABLED'), {
    host: 'logs.papertrailapp.com',
    port: conf('PAPERTRAIL_PORT'),
    level: conf('PAPERTRAIL_LEVEL')
});

function add (transport, enabled, options) {
    if (enabled) { logger.add(transport, options); }
}

function timestamps(){
    return moment().format();
}
