"use strict";

var CalculationElement = require('./model/calculationElement');

class CampainCalculator{

  /**
  * method to check if a given user matches a campain filter
  * @return {boolean}
  */
  async calculateIfUserMatchCampain(userId, campainMatcherOperation){
    return await calculate(userId, campainFilterRootCalculationElement)
  }


  async calculate(userId, calculationElement){

    if(calculationElement instanceof CalculationOperand){
      return isInSegment(userId, calculationElement.getSegmentId())

    }
    else{
      var left = calculate(userId, calculationElement.getLeftElement());
      var right = calculate(userId, calculationElement.getRightElement());

      return calculationElement.getOperator().operate(left,right);
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
  }

}
const instance = new CampainCalculator();
Object.freeze(instance);

module.exports = instance;
