const createCounter = (n) => {
  return () => {
    return n++;
  }
};

let counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
