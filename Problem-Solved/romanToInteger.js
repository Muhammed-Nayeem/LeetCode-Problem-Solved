const romanToInt = (s) => {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let accumulator = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = symbol[s[i]];
    const nextValue = symbol[s[i + 1]];

    if (currentValue < nextValue) {
      accumulator += nextValue - currentValue;
      i++;
    } else {
      accumulator += currentValue;
    }
  }

  return accumulator;
};

console.log(romanToInt("MCMXCIV"));