'use strict';

var path = require('path');
var util = require('util');
var nconf = require('nconf');
var moment = require('moment');
var pkg;
var env;

moment.defaultFormat = 'Do HH:mm:ss';

nconf.use('memory');
nconf.argv();
nconf.env();

env = nconf.get('NODE_ENV') || 'development';

file('user');
file(env);
file('defaults', false);

console.log('%s - Loaded configuration for %s environment', moment().format(), env);

function file (name, secure) {
    var location = secure === false ? '.' : 'private';
    var filename = util.format('%s/%s.json', location, name);
    var filepath = path.join(__dirname, filename);

    nconf.file(name, filepath);
}

require('./globals.js');

pkg = require_cwd('package.json');

nconf.set('BUILD_VERSION', pkg.version);
