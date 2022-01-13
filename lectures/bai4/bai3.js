const fs = require('fs');

const readFilePromise = function(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err) return reject(err);
       return resolve(data.toString());
    });
  })
}

const fileArr = ['./lyrics/7rings.txt', './lyrics/positions.txt', './lyrics/thankunext.txt'].map(file => readFilePromise(file));

// readFilePromise('./lyrics/7rings.txt').then((data) => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// })

Promise.all(fileArr).then(result => console.log(result));