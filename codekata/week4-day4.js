const maxSubArray = (nums) => {
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (result < sum) {
        result = sum;
      }
    }
  }
  return result;
};
