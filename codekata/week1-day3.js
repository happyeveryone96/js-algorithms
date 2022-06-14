const getLengthOfStr = (str) => {
  const strArr = str.split("");
  let answerArr = [];
  let longNumArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (!answerArr.includes(strArr[i])) {
      answerArr.push(strArr[i]);
    } else {
      longNumArr.push(answerArr.length);
      answerArr = [];
    }
    if (i === strArr.length - 1) {
      longNumArr.push(answerArr.length);
    }
  }
  return Math.max(...longNumArr);
};
