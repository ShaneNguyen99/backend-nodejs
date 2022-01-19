const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/image', (req, res) => {
  fs.readFile('dog.png', null, (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': data.length
    });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at: http://localhost:3000/image`);
});