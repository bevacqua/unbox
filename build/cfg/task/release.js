'use strict';

var emoji = require('emoji-random');

module.exports = {
    rev: {
        css: { files: { src: 'bin/public/css/all.css' } },
        js: { files: { src: 'bin/public/js/**/*.js' } }
    },
    bump: {
        options: {
            files: ['package.json', 'bower.json'],
            updateConfigs: ['pkg'],
            commitFiles: ['package.json', 'bower.json', 'CHANGELOG.markdown'],
            commitMessage: 'Release v%VERSION% ' + emoji.random(),
            pushTo: 'origin'
        }
    },
    changelog: {
        options: {
            dest: 'CHANGELOG.markdown',
            editor: 'sublime -w'
        }
    }
};
