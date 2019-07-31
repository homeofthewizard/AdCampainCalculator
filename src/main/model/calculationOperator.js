"use strict";

import CalculationElement from './calculationElement';


/**
 * Model object presenting a logical operation in the campain calculation
 *
 * @prop {number} operator - an operator value of the Operator static constent map
 */
class CalculationOperator extends CalculationElement{

  constructor(options, operator){
    var left, right;
    if(options.left)
      left = options.left;
    if(options.right)
      right = options.right;
    super(left,right);
    this._operator = operator;
  }

  get operator(){
    return this._operator;
  }

  get leftElement(){
    return super.leftElement;
  }

  get rightElement(){
    return super.rightElement;
  }
}

module.exports = CalculationOperator;
