'use strict';

var _ = require('lodash');
var path = require('path');
var asset = require('./util/asset.js');

function bower(release){
    return {
        expand: true,
        cwd: 'bower_components',
        src: release ? ['**/*.min.{js,js.map}'] : ['**/*.js', '!**/*.min.js'],
        dest: 'bin/public/js/vendor'
    };
}

module.exports = {
    lint: function(base, glob){
        return {
            options: {
                jshintrc: path.join(base, '.jshintrc')
            },
            files: {
                src: glob
            }
        };
    },
    copy: {
        js_bower_debug: bower(false),
        js_bower_release: bower(true),
        js_sources: {
            expand: true,
            cwd: 'src/client/js',
            src: ['**/*.js'],
            dest: 'bin/public/js'
        }
    },
    files: function(){
        var vendor = asset.links('bin/public/js/vendor', 'bin/public');
        var all = asset.links('bin/public/js', 'bin/public');
        var distinct = _.union(vendor, all);
        var JS_EXT = /\.js$/;

        return _.filter(distinct, function(file){
            return JS_EXT.test(file); // ignore *.map files
        });
    }
};