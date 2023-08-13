const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let element1 = nums[i];
    for (let j = i+1; j < nums.length; j++) {
      let element2 = nums[j];
      let sum_up = element1 + element2;
      if (sum_up === target) {
        return [i, j];
      }
    }
  }
};

let output = twoSum([2,7,11,15], 9);
console.log(output);
