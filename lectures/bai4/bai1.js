const checkGreater = function(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(true);
    } else {
      reject('The number is smaller or equal to 10');
    }
  });
}

checkGreater(1).then((value) => console.log(value)).catch((err) => console.error(err));