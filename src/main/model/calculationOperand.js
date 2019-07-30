"use strict";

var CalculationElement = require('./calculationElement');


/**
 * Model object presenting a segment in the campain calculation
 *
 * @prop {number} segmentId - the Id of the segment presented by this element of calculation
 */
class CalculationOperand extends CalculationElement{

  constructor(segmentId){
    super(undefined,undefined);
    this._segmentId = segmentId;
  }

  get segmentId(){
    return this._segmentId;
  }

  get leftElement(){
    return super.leftElement;
  }

  get rightElement(){
    return super.rightElement;
  }
}

module.exports = CalculationOperand;
