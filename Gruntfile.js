'use strict';

var _ = require('lodash');
var moment = require('moment');
var cfg = require('./build/cfg');

require('./env/grunt.js');
require('./env'); // globals and environment variables

module.exports = function(grunt){

    grunt.log.write('%s - Loading external tasks...', moment().format());

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.log.writeln('done');

    grunt.loadTasks('./build/tasks');
    grunt.initConfig(_.merge.apply({}, _.values(cfg)));

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    // build tasks
    alias('images:debug', 'clean:images copy:images sprite');
    alias('images:release', 'images:debug imagemin:all');

    alias('css:debug', 'clean:css stylus:all csslint');
    alias('css:release', 'clean:css stylus:all cssmin:release rev:css');

    alias('js:debug', 'clean:js copy:js_sources copy:js_bower_debug jshint');
    alias('js:release', 'clean:js copy:js_sources uglify:js clean:after_uglify copy:js_bower_release rev:js');

    alias('views:debug', 'clean:views jade:debug');
    alias('views:release', 'clean:views jade:release');

    alias('build:debug', 'clean copy:other images:debug css:debug js:debug views:debug bump-only:build');
    alias('build:rebuild', 'build:debug play:success');
    alias('build:release', 'clean copy:other images:release css:release js:release views:release usemin bump-only:build');

    // testing tasks
    alias('test', 'jshint csslint mochaTest:unit karma:unit_once');

    // development and debugging tasks
    alias('dev_setup', 'pem_decrypt:dev');
    alias('dev', 'build:debug karma:unit_background concurrent:dev');

    // continuous integration and deployment tasks
    alias('ci', 'build:release test');

    alias('deploy_setup', 'pem_decrypt:aws shell:deploy_setup');
    alias('deploy_prepare', 'build:release test bump-only:patch changelog bump-commit');
    alias('deploy', 'deploy_prepare ec2_deploy:edge');
    alias('deploy_production', 'deploy_prepare ec2_deploy:production');

    alias('default', 'dev');
};
