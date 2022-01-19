// const fs = require('fs');

// fs.readFile('nullFile', (err, data) => {
//   // console.log(data);
//   // console.error(err);
// });

try {
  throw new Error('Hello World Error!');
} catch(e) {
  throw e;
}

console.log(`Code after error`);