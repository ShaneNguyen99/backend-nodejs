const axios = require('axios');
const fs = require('fs');

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => {
  if (res.status === 200) {
    fs.writeFile('bitcoin.json', JSON.stringify(res.data), null, () => console.log('done!'));
    // console.log();
  }

}).catch(err => console.error(err));