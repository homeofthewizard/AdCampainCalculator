"use strict";

var campainCalculator = require('./campainCalculator');
var campains = require('../resources/campains');

var userId = 1;

(async () => {
  var result = await campainCalculator.calculateIfUserMatchCampain(userId, campains.LEquipe);
  console.log("result: " + result);
})().catch(err => {
    console.error(err);
});
