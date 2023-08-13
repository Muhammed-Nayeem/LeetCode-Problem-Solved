/**
 ** Title: 2667. Create Hello World Function;
 *? Description: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 *? Author: Muhammed Nayeem.
 *? Date: 14/08/2023.
 */

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

let test = createHelloWorld();
console.log(test([]));
console.log(test([{},null,42]));
