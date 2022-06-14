const reverse = (x) => {
  const strNum = String(x);
  if (strNum[0] === "-") {
    const sliceNum = strNum.slice(1, strNum.length);
    return -Number(sliceNum.split("").reverse().join(""));
  } else {
    return Number(strNum.split("").reverse().join(""));
  }
};
