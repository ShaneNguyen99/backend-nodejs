const axios = require('axios');
const fs = require('fs');

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(res => axios.get(res.data.message, {responseType: 'arraybuffer'} ))
  .then(res => fs.writeFile('dog.png', res.data, null, () => console.log('done!')))
  .catch(err => console.error(err));