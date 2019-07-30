"use strict";

var CalculationElement = require('./calculationElement');


/**
 * Model object presenting a segment in the campain calculation
 *
 * @prop {number} segmentId - the Id of the segment presented by this element of calculation
 */
class CalculationOperator extends CalculationElement{

  constructor(left, right, operator){
    super(left,right);
    this._segmentId = segmentId;
  }

  get getOperator(){
    return this._operator;
  }
}

module.exports = CalculationOperand;
