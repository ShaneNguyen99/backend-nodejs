const fs = require('fs');

const readFilePromise = function(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err) return reject(err);
      return resolve(data.toString());
    });
  })
}

async function readFileContent(path){
  const result = await readFilePromise(path);
  console.log(result);
  return result;
}


readFileContent('./lyrics/7rings.txt').then(res => console.log(res));

module.exports = {
  readFileContent: readFileContent
};