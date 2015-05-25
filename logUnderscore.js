'use strict'

var _ = require('underscore');

var logUnderScoreVersion = function(){
    console.log("_.VERSION ", _.VERSION);
};

var getDate = function(){
    console.log(new Date().getDate());
};
var getMonth = function(){
    console.log(new Date().getMonth());
};
exports.logUnderScoreVersion=  logUnderScoreVersion;
exports.getDate = getDate;
exports.getMonth = getMonth;
