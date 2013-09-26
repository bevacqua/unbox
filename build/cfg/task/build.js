'use strict';

var _ = require('lodash');
var assets = require('../assets');

module.exports = {
    clean: {
        all: 'bin',
        views: 'bin/views',
        js: 'bin/public/js',
        css: 'bin/public/css',
        images: ['bin/public/img', 'bin/public/favicon.ico'],
        tmp_sprite: 'bin/.tmp/sprite',
        after_uglify: ['bin/public/js/**/*.js', '!bin/public/js/all.js']
    },
    csslint: {
        client: {
            options: {
                csslintrc: 'src/client/css/.csslintrc',
            },
            src: ['bin/.tmp/csslint/*.css']
        }
    },
    stylus: {
        all: {
            options: {
                'include css': true,
                paths: ['bower_components']
            },
            files: {
                'bin/public/css/all.css': ['src/client/css/vendor.styl', 'src/client/css/all.styl', 'bin/.tmp/sprite/*.css'],
                'bin/.tmp/csslint/compiled.css': ['src/client/css/all.styl']
            }
        }
    },
    jade: {
        debug: assets.jade(false),
        release: assets.jade(true)
    },
    copy: _.assign(assets.img.copy, assets.js.copy, assets.other.copy),
    json2css: {
        all: {
            src: 'bin/.tmp/sprite/*.json',
            format: 'pseudo_class_css'
        }
    },
    sprite: {
        icons: assets.img.sprite('icons', 'ic')
    },
    imagemin: {
        all: {
            files: [{
                expand: true,
                src: 'bin/public/img/**/*.{png,jpg,gif}'
            }],
            options: {
                progressive: true,
                interlaced: true
            }
        }
    },
    cssmin: {
        release: {
            files: { 'bin/public/css/all.css': 'bin/public/css/all.css' },
            options: {
                keepSpecialComments: 0
            }
        }
    },
    uglify: {
        js: {
            files: { 'bin/public/js/all.js': 'bin/public/js/**/*.js' },
            options: {
                preserveComments: false
            }
        }
    }
};
