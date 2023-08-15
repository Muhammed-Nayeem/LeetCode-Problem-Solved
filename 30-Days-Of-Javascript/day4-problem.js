/**
 ** Title: 2665. Counter II
 */

const createCounter = (init) => {
  let currentValue = init;
  return {
    increment: function () {
      return ++currentValue;
    },

    decrement: function () {
      return --currentValue;
    },

    reset: function () {
      return (currentValue = init);
    },
  };
};

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
