"use strict";

var CalculationElement = require('./calculationElement');


/**
 * Model object presenting a segment in the campain calculation
 *
 * @prop {number} segmentId - the Id of the segment presented by this element of calculation
 */
class CalculationOperand extends CalculationElement{

  constructor(left, right, segmentId){
    super(left,right);
    this._segmentId = segmentId;
  }

  get getSegmentId(){
    return this._segmentId;
  }
}

module.exports = CalculationOperand;
