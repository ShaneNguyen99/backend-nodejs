// const count = (arr, cb) => {
//   const result = {
//     even: 0,
//     odd: 0
//   };
//   arr.forEach(element => {
//     if (cb(element) === 'even') {
//       result['even'] += 1;
//     } else if (cb(element) === 'odd') {
//       result['odd'] += 1;
//     }
//   });
//   return result;
// }

const count = (arr, cb) => {
  return arr.reduce((obj, element) => {
    const ret = cb(element);
    obj[ret] ? obj[ret] += 1 :  obj[ret] = 1;
    return obj;
  }, {});
};

console.log(count([1,2,3,4,5], function(num) { 
  if(num % 2 === 0)
    return 'even';
  else 
    return 'odd'; 
}));

