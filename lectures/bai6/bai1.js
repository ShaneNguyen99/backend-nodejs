const fs = require('fs');

const content = fs.readFile('./lyrics/thankunext.txt', 'utf8', (error, data) => {
  console.log(error);
  console.log(data);
});

fs.writeFile('./lyrics/eleven.txt', 'You got me feel like eleven', {}, (error) => console.log('Done writing File'))

console.log('END');