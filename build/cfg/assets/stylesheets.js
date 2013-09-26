'use strict';

var asset = require('./util/asset.js');

module.exports = {
    files: function(){
        return asset.links('bin/public/css', 'bin/public');
    }
};