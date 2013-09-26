'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var util = require('util');
var viewBase = 'bin/views';
var Controller = require('./Controller.js');

function ViewController(name){
    Controller.apply(this, arguments);

    this.name = name;
}

util.inherits(ViewController, Controller);

ViewController.prototype.renderView = function(res, view){
    var file = path.join(viewBase, this.name, view);

    fs.readFile(file, function(err, data){
        res.set('Content-Type', 'text/html');
        res.end(data);
    });
};

ViewController.prototype.getView = function(view){
    var controller = this;

    return function (req, res) {
        controller.renderView(res, view + '.html');
    };
};

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(ViewController, [null].concat(args)))();
};