const axios = require('axios');
function loadJson(url) {
  return axios.get(url)
    .then(response => {
      if (response.status == 200) {
        return response;
      } else {
        throw new Error(response.status);
      }
    })
  }
  
async function loadJson2(url) {
  const response = await axios.get(url);
  if (response.status == 200) {
    return response;
  } else {
    throw new Error(response.status);
  }
}



loadJson2('https://tutorialzine.com/misc/files/example.json').then(res => console.log(res.data));
