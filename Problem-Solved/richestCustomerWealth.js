const customer = [
  [1, 5],
  [7, 3],
  [3, 5],
];

const maximumWealth = (accounts) => {
  let wealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let maxWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      maxWealth += accounts[i][j];
    }
    if (maxWealth > wealth) {
      wealth = maxWealth;
    }
  }
  return wealth;
};

// const maximumWealth = (accounts) => {
//   return Math.max(
//     ...accounts.map((account) => account.reduce((a, b) => a + b, 0))
//   );
// };

let test = maximumWealth(customer);
console.log(test);
// maximumWealth(customer);
