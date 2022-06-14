const solution = (N) => {
  const binaryNum = N.toString(2);
  const answerArr = [];
  let temp = 0;
  for (let i = 1; i < binaryNum.length; i++) {
    if (binaryNum[i] === "0") temp += 1;
    if (binaryNum[i] === "1") {
      answerArr.push(temp);
      temp = 0;
    }
  }
  if (answerArr.length === 0) return 0;
  return Math.max(...answerArr);
};
