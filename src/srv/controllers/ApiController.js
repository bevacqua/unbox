'use strict';

var _ = require('lodash');
var util = require('util');
var Controller = require('./Controller.js');

function ApiController(){
    Controller.apply(this, arguments);
}

util.inherits(ApiController, Controller);

ApiController.prototype.v = '/api/v1';

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(ApiController, [null].concat(args)))();
};
