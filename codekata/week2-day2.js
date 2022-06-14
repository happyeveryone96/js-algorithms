function moreThanHalf(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums.filter((e) => nums[i] === e).length;
    if (num > nums.length / 2) return nums[i];
  }
}
