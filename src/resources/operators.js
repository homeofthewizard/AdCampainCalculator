const Operators = Object.freeze({
  AND: { name: "AND", operate: function(a, b) { return (a === 'true') && (b === 'true') } },
  OR:  { name: "OR", operate: function(a, b) { return (a === 'true') || (b === 'true') } },
  NOT: { name: "NOT", operate: function(a) { return !(a === 'true') } }
});

// import {Enum} from 'enumify';
//
// class Operator extends Enum {}
//
// Operator.initEnum({
//     AND: {
//         get operate() { return true },
//     },
//     OR: {
//         get operate() { return true },
//     },
//     NOT: {
//         get operate() { return false },
//     }
// });
//

module.exports = Operators;
