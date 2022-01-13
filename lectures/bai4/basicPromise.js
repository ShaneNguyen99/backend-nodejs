const promise = new Promise((resolve, reject) => {
  let name = 'Hoang';
  if(name !== 'Hoang') {
    reject(new Error('You are not Hoang'));
  }
  resolve(name);
});


promise.then((value) => {
  console.log(value);
}).catch((err) => {
  console.error(err);
});