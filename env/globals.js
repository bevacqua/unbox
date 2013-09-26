'use strict';

var path = require('path');
var nconf = require('nconf');
var moment = require('moment');
var cwd = process.cwd();

global.conf = nconf.get.bind(nconf);

global.require_cwd = function(file){
    var absolute = path.join(cwd, file);
    return require(absolute);
};

moment.defaultFormat = 'Do HH:mm:ss';
