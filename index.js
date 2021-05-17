const sampleFunc1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('1');
    }, Math.random() * 3000);
  });
}

const sampleFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('2');
    }, Math.random() * 3000);
  });
}

(async () => {
  await sampleFunc1().then(async(res) => {
    console.log(res);
    await sampleFunc2().then((res) => {
      console.log(res);
    }); 
    console.log('Done');
  });
})();