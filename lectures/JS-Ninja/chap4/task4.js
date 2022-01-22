var assert = require('assert');

var ninja1 = {
  whoAmI: function () {
    return this;
  }
};
var ninja2 = {
  whoAmI: ninja1.whoAmI
};
var identify = ninja2.whoAmI;
// assert(ninja1.whoAmI() === ninja1, "ninja1?");
// assert(ninja2.whoAmI() === ninja1, " ninja1 again?");
// assert(identify() === ninja1, "ninja1 again?");
assert(ninja1.whoAmI.call(ninja2) === ninja2, "ninja2 here?");