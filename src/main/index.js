"use strict";

var campainCalculator = require('./campainCalculator');
var Operators = require('../../src/resources/operators');
var CalculationOperand = require('./model/calculationOperand');
var CalculationOperator = require('./model/calculationOperator');

var userId = 1;

var segmentFoot = 1;
var segmentMan = 2;
var segmentFrench = 3;
var segmentItalien = 4;
// var segmentYoung = 5;

var footOperand = new CalculationOperand(undefined, undefined, 1);
var manOperand = new CalculationOperand(undefined, undefined, 2);
var frenchOperand = new CalculationOperand(undefined, undefined, 3);
var italienOperand = new CalculationOperand(undefined, undefined, 4);
// var youngOperand = new CalculationOperand(undefined, undefined, 5);

var andOperator = new CalculationOperator(footOperand, manOperand, Operators.AND);
var orOperator = new CalculationOperator(frenchOperand, italienOperand, Operators.OR);
// var notOperator = new CalculationOperator(undefined, young, Operator.NOT);

var campainFilterRootCalculationElement = new CalculationOperator( andOperator, orOperator, Operators.AND);

(async () => {
  var result = await campainCalculator.calculateIfUserMatchCampain(userId, campainFilterRootCalculationElement);
  console.log("result: " + result);
})().catch(err => {
    console.error(err);
});
