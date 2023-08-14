function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

// console.log(sleep(100));

sleep(200)
  .then(res => console.log(res));
