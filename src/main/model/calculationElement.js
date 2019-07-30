"use strict";


/**
 * Super class for elements of the calculation: Operands and the Operations
 * Programatical implementation of ES6 style Abstract classes:
 * Cannot be instanciated alone, and enforce interface method implementations
  *
  * @prop {object} left - CalculationElement object presenting the lefthand operation element
  * @prop {object} right - CalculationElement object presenting the righthand operation element
  */
class CalculationElement{

  constructor(leftCalculation, rightCalculation){
    this._left = leftCalculation;
    this._right = rightCalculation;

    if (new.target === CalculationElement) {
      throw new TypeError("Cannot construct CalculationElement instances directly");
    }
  }

  get getLeftElement(){
    return this._left;
  }

  get getRightElement(){
    return this._right;
  }

}

module.exports = CalculationElement;
