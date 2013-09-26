'use strict';

var path = require('path');
var util = require('util');
var cwd = process.cwd();

var settings = {
    pem_gen: {},
    pem_encrypt: {},
    pem_decrypt: {}
};

function add (keyName) {
    var keyFile = util.format('env/private/%s.pem', keyName);
    var pem = path.join(cwd, keyFile);

    settings.pem_gen[keyName] = { pem: pem };
    settings.pem_encrypt[keyName] = settings.pem_decrypt[keyName] = {
        pem: pem,
        pemstore: 'env/secure/' + keyName,
        rawstore: 'env/private/' + keyName
    };
}

add('grunt');
add('development');
add('edge');
add('production');

module.exports = settings;
