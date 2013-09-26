'use strict';

var controller = module.exports = require('../Controller.js')();

controller.registerRoutes = function(app){
    app.get('/code', controller.getCode);
    app.get('/source', controller.getSource);
};

controller.getCode = function(req, res){
    res.redirect('https://github.com/bevacqua');
};

controller.getSource = function(req, res){
    res.redirect('https://github.com/bevacqua/io');
};
