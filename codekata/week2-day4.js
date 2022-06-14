function topK(nums, k) {
  let numObj = {};
  const existNum = [];

  for (let i = 0; i < nums.length; i++) {
    if (!existNum.includes(nums[i])) {
      numLen = nums.filter((num) => num === nums[i]).length;
      numObj = { ...numObj, [nums[i]]: numLen };
      existNum.push(nums[i]);
    }
  }

  return Object.keys(numObj)
    .sort((a, b) => numObj[b] - numObj[a])
    .slice(0, k)
    .map((v) => +v);
}
