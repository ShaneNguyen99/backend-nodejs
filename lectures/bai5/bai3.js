const printAsync = function(stt) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Đây là promise thứ ${stt}`)
      })
    }, 2000)
}

async function count() {
  for(let i = 1; i <= 10; i++) {
    // console.log(i);
    console.log(await printAsync(i));
  }
}

count();