'use strict';

require('./globals.js');

var path = require('path');
var util = require('util');
var nconf = require('nconf');
var moment = require('moment');
var pkg = require_cwd('package.json');

nconf.use('memory');
nconf.set('BUILD_VERSION', pkg.version);
nconf.argv();
nconf.env();

var env = nconf.get('NODE_ENV') || 'development';

file('user');
file(env);
file('defaults', false);

var envText = util.format('%s - Loaded configuration for %s environment', moment().format(), env);

console.log(envText);

function file (name, secure) {
    var location = secure === false ? '.' : 'private';
    var filename = util.format('%s/%s.json', location, name);
    var filepath = path.join(__dirname, filename);

    nconf.file(name, filepath);
}
