"use strict";

var CalculationElement = require('./model/calculationElement');
var Operators = require('../../src/resources/operators');
var CalculationOperand = require('./model/calculationOperand');

class CampainCalculator{

  /**
  * method to check if a given user matches a campain filter
  * @return {boolean}
  */
  async calculateIfUserMatchCampain(userId, campainFilterRootCalculationElement){
    return await this.calculate(userId, campainFilterRootCalculationElement)
  }


  async calculate(userId, calculationElement){

    if(calculationElement instanceof CalculationOperand){
      console.log("checking if user is in segment: " + calculationElement.segmentId);
      return await this.isInSegment(userId, calculationElement.segmentId);

    }
    else{
      var left = await this.calculate(userId, calculationElement.leftElement);
      var right = await this.calculate(userId, calculationElement.rightElement);

      console.log("calculating operation: " + calculationElement.operator.name);
      return calculationElement.operator.operate(left,right);
    }
  }


  /**
  * method to check if a given user is in the given segment
  * @return {boolean}
  */
  async isInSegment(userId, segmentId){

    //simulate call to external API
    setTimeout(function() {
      console.log('fetching data from segment api');
    }, 1000);
    return true;
  }

}
const instance = new CampainCalculator();
Object.freeze(instance);

module.exports = instance;
