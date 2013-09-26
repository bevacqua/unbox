'use strict';

var jadeContextService = require('../service/jadeContextService.js');

require('./util/initJadeContext.js');

module.exports = function(release){
    var views = 'src/client/views';

    return {
        expand: true,
        cwd: views,
        src: '**/*.jade',
        dest: 'bin/views',
        ext: '.html',
        options: {
            pretty: !release,
            basedir: views,
            data: jadeContextService.getContext
        }
    };
};