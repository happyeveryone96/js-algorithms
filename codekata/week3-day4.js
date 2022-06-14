const moveZeroes = (nums) => {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      cnt++;
      i--;
    }
  }
  for (let j = 0; j < cnt; j++) nums.push(0);
  return nums;
};
