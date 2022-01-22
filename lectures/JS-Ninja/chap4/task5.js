const assert = require('assert');
function Ninja(){
  this.whoAmI = () => this;
 }
 var ninja1 = new Ninja();
 var ninja2 = {
  whoAmI: ninja1.whoAmI
 };
//  assert(ninja1.whoAmI() === ninja1, "ninja1 here?");
 assert(ninja2.whoAmI() === ninja2, "ninja2 here?");