'use strict';

var controller = module.exports = require('../ViewController.js')('home');

controller.registerRoutes = function(app){
    app.get('/', controller.getView('landing'));
};