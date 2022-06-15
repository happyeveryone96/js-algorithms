const groupAnagrams = (strs) => {
  const sortedArr = strs.map((e) => e.split("").sort().join(""));

  const answerArr = [];

  for (let i = 0; i < strs.length; i++) {
    let sameArr = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (sortedArr[i] === sortedArr[j]) {
        sameArr.push(strs[j]);
      }
    }
    answerArr.push(sameArr);
  }

  const isIncluded = function (first, second) {
    return first.filter((value) => second.includes(value)).length !== 0;
  };

  for (let i = 0; i < answerArr.length; i++) {
    for (let j = i + 1; j < answerArr.length; j++) {
      if (isIncluded(answerArr[i], answerArr[j])) {
        answerArr.splice(j, 1);
      }
    }
  }
  return answerArr;
};
