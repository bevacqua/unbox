'use strict';

process.on('uncaughtException', function(err){
    var cause = err.stack || err;

    logger.warn('Uncaught exception crashed process\n', cause, function () {
        process.exit(1);
    });
});
