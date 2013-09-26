'use strict';

var controller = module.exports = require('../ApiController.js')();

controller.registerRoutes = function(app){
    app.get(controller.v + '/env', controller.getEnv);
    app.get(controller.v + '/env/version', controller.getVersion);
    app.get(controller.v + '/env/distribution', controller.getDistribution);
};

controller.getEnv = function(req, res){
    res.json({ env: conf('NODE_ENV') });
};

controller.getVersion = function(req, res){
    res.json({ version: conf('BUILD_VERSION') });
};

controller.getDistribution = function(req, res){
    res.json({ distribution: conf('BUILD_DISTRIBUTION') });
};