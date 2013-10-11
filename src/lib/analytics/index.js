'use strict';

var profiled = conf('NODETIME_ENABLED');
if (profiled) {
    profiler();
}

function profiler () {
    require('nodetime').profile({
        accountKey: conf('NODETIME_ACCOUNT_KEY'),
        appName: 'unbox'
    });
}
