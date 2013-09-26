'use strict';

var _ = require('lodash');
var logger = require('winston');
var api = module.exports = { stream: stream };

var levels = ['debug', 'info', 'warn', 'error'];

_.each(levels, function(level){
    api[level] = logger[level].bind(logger);
});

require('./transports.js');

function stream (level) {
    return {
        write: function(data){
            var message = data.replace(/\n+$/, ''); // remove trailing breaks
            api[level](message);
        }
    };
}
