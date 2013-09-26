'use strict';

var _ = require('lodash');

function Controller(){
}

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(Controller, [null].concat(args)))();
};
