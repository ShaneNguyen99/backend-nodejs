const makeAllCaps = (arr = []) => new Promise((resolve, reject) => {
  resolve(arr.map(element => element.toUpperCase()));
});

const sortWords = (arr = []) => new Promise((resolve, reject) => {
  resolve(arr.sort());
});



arr = ['hi', 'my', 'name', 'is', 'Hoang'];


makeAllCaps(arr).then(result => sortWords(result)).then(result => console.log(result));

// sortWords(arr).then(result => console.log(result));