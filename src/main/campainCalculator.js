"use strict";

import CalculationElement from './model/calculationElement';
import CalculationOperand from './model/calculationOperand';
import Operators from '../resources/operators';
import Segments from '../resources/segmentsBook';


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
      return this.isInSegment(userId, calculationElement.segmentId);

    }
    else{
      let [left, right] = await Promise.all([this.calculate(userId, calculationElement.leftElement),
                                            this.calculate(userId, calculationElement.rightElement)]);

      console.log("calculating operation: " + calculationElement.operator.name + " for left:" + left + " right:" + right);
      return calculationElement.operator.operate(left,right);
    }
  }


  /**
  * method to check if a given user is in the given segment
  * @return {boolean}
  */
  async isInSegment(userId, segmentId){
    //simulate call to external API by putting a processing delay
    await this.timeout(3000);
    var result = Object.values(Segments)
                      .filter(segment => segment.id == segmentId)
                      .map( segment => segment.users.includes(userId) );

    console.log("got result, is user: " + userId + " in segment: " + segmentId + "= " + result);
    return result;
  }


  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}


const instance = new CampainCalculator();
Object.freeze(instance);
module.exports = instance;
