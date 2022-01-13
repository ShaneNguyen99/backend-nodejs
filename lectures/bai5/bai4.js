const {readFileContent} = require('./bai2');


const fileArr = ['./lyrics/7rings.txt', './lyrics/positions.txt', './lyrics/thankunext.txt'].map(file => readFileContent(file));

// readFilePromise('./lyrics/7rings.txt').then((data) => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// })

Promise.all(fileArr).then(result => console.log(result));