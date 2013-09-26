'use strict';

var chalk = require('chalk');

module.exports = function(grunt){
    grunt.registerTask('env', function(){
        grunt.log.writeln('Pulling environment variables and overrides...');

        var env = conf();

        for (var key in env) {
            var property = chalk.magenta(key);
            var value = JSON.stringify(env[key], null, 2);

            grunt.log.writeln('%s: %s', property, value);
        }
    });
};
