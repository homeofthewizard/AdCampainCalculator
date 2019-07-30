const Operators = Object.freeze({
  AND: { name: "and", operate: function(a, b) { return a && b } },
  OR:  { name: "or", operate: function(a, b) { return a || b } },
  NOT: { name: "not", operate: function(a) { return !a } }
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
