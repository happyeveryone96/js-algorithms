const reverseString = (s) => {
  // 1. reverse 이용
  // return s.reverse();

  // 2. for문 이용
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};
