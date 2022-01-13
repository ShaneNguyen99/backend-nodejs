require('dotenv').config();
const util = require('codegym-demo').myUtil;
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const val = util.math.add(2,3);
console.log(val);


const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  const html = '<h1>Welcome to the Homepage</h1>';
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end(html);
});

app.post('/add', (req, res) => {
  const {num1, num2} = req.body;
  const result = util.math.add(num1, num2);
  res.status(200).json({"result": result});
});

app.listen(process.env.PORT || 3124);
console.log(`App is running on port ${process.env.PORT || 3124}`);

module.exports = {
  app: app
};