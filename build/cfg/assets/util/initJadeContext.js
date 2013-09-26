'use strict';

var stylesheets = require('../stylesheets.js');
var javascripts = require('../javascripts.js');
var jadeContextService = require('../../service/jadeContextService.js');

jadeContextService.registerProvider(function(){
    return { stylesheets: stylesheets.files() };
});

jadeContextService.registerProvider(function(){
    return { javascripts: javascripts.files() };
});

jadeContextService.registerProvider(function(){
    return { pkg: require_cwd('package.json') };
});
