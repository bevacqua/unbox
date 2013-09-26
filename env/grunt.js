'use strict';

var nconf = require('nconf');

nconf.use('memory');
nconf.set('NODE_ENV', 'grunt');
