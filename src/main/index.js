"use strict";

import CampainCalculator from './campainCalculator';
import Campains from '../resources/campains';

var userId = 1;

(async () => {
  var result = await CampainCalculator.calculateIfUserMatchCampain(userId, Campains.LEquipe);
  console.log("result: " + result);
})().catch(err => {
    console.error(err);
});
