const getPrefix = (strs) => {
  let num = 0;
  if (strs[0] === undefined || strs[1] === undefined) {
    return "";
  } else if (strs[2] !== undefined) {
    for (let i = 0; i < strs[0].length; i++) {
      if (strs[0][i] === strs[1][i] && strs[0][i] === strs[2][i]) {
        num += 1;
      }
    }
  } else if (strs[2] === undefined) {
    for (let i = 0; i < strs[0].length; i++) {
      if (strs[0][i] === strs[1][i]) {
        num += 1;
      }
    }
  }
  return strs[0].slice(0, num);
};
