'use strict';

var util = require('util');

module.exports = {
    copy: {
        images: {
            expand: true,
            cwd: 'src/client/img',
            dest: 'bin/public/img',
            src: ['**/*.{png,jpg,gif}', '!sprite/**/*.{png,jpg,gif}']
        }
    },
    sprite: function(type, short){
        return {
            src: util.format('src/client/img/sprite/%s/**/*.{png,jpg,gif}', type),
            destImg: util.format('bin/public/img/sprite/%s.png', type),
            destCSS: util.format('bin/.tmp/sprite/%s.css', type),
            imgPath: util.format('/img/sprite/%s.png', type),
            cssOpts: {
                cssClass: function (item) {
                    var prefix = short ? short + '-' : '';
                    return util.format('.%s:before', prefix + item.name);
                }
            },
            engine: 'gm',
            imgOpts: {
                format: 'png'
            }
        };
    }
};
