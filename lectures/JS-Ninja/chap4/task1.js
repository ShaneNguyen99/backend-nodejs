var assert = require('assert');
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args) {
  return args.reduce((sum, parameter) => sum + parameter, 0);
}
assert(sum(1, 2, 3) === 6, 'Sum of first three numbers is 6');
assert(sum(1, 2, 3, 4) === 10, 'Sum of first four numbers is 10'); 
assert(sum2(1, 2, 3) === 6, 'Sum of first three numbers is 6');
assert(sum2(1, 2, 3, 4) === 10, 'Sum of first four numbers is 10'); 