'use strict';

// this service is used as a bridge to send data to Jade views,
// which are statically compiled to HTML during builds.

var _ = require('lodash');
var providers = [];

module.exports = {
    getContext: function(){
        var data = providers.map(function(provider){
            return provider();
        });

        return _.assign.apply(_, [{}].concat(data));
    },
    registerProvider: function(provider){
        providers.push(provider);
    }
};