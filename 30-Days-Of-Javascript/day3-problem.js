//A function that will take any value and return an object with two function:
const expect = (value) => {
  return {
    toBe: function (val) {
      if (val === value) {
        return true;
      } else {
        throw Error("Not Equal");
      }
    },
    notToBe: function (val) {
      if (val !== value) {
        return true;
      } else {
        throw Error("Equal");
      }
    },
  };
};

let test1 = expect(5).toBe(5);
let test2 = expect(5).notToBe(11);
console.log(test1);
console.log(test2);
