const even = (num) => { return num % 2 === 0; };

const odd = (num) => { return num % 2 === 1; };

const checkMajority = (arr, cb) => {
  let valueNum = 0
  let nonValueNum = 0;
  arr.forEach((element) => {
    cb(element) ? valueNum += 1 : nonValueNum += 1;
  });
  return valueNum > nonValueNum;
};

console.log(checkMajority([1,2,3,4,5], odd));
