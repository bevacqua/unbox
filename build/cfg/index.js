'use strict';

var grunt = require('grunt');

module.exports = {
    package: {
        pkg: grunt.file.readJSON('package.json')
    },
    dev: require('./task/development.js'),
    env: require('./task/environment.js'),
    build: require('./task/build.js'),
    release: require('./task/release.js'),
    deploy: require('./task/deploy.js')
};
