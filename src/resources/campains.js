var Operators = require('./operators');
var Segments = require('./segmentsBook');
var CalculationOperand = require('../main/model/calculationOperand');
var CalculationOperator = require('../main/model/calculationOperator');



var footOperand = new CalculationOperand(Segments.FOOT.id);
var manOperand = new CalculationOperand(Segments.MAN.id);
var frenchOperand = new CalculationOperand(Segments.FRENCH.id);
var italienOperand = new CalculationOperand(Segments.ITALIEN.id);
// var youngOperand = new CalculationOperand(Segments.YOUNG.id);

var footAndManOperator = new CalculationOperator({left:footOperand, right:manOperand}, Operators.AND);
var frenchOrItalienOperator = new CalculationOperator({left:frenchOperand, right:italienOperand}, Operators.OR);
// var notOperator = new CalculationOperator({left:youngOperand}, Operator.NOT);

var campainFilterRootCalculationElement = new CalculationOperator( {left:footAndManOperator, right:frenchOrItalienOperator}, Operators.AND);

const campains = { LEquipe : campainFilterRootCalculationElement };

module.exports = campains;
