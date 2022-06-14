function romanToNum(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      answer += 1;
    } else if (s[i] === "V") {
      s[i - 1] === "I" ? (answer += 3) : (answer += 5);
    } else if (s[i] === "X") {
      s[i - 1] === "I" ? (answer += 8) : (answer += 10);
    } else if (s[i] === "L") {
      s[i - 1] === "X" ? (answer += 30) : (answer += 50);
    } else if (s[i] === "C") {
      s[i - 1] === "X" ? (answer += 80) : (answer += 100);
    } else if (s[i] === "D") {
      s[i - 1] === "C" ? (answer += 300) : (answer += 500);
    } else if (s[i] === "M") {
      s[i - 1] === "C" ? (answer += 800) : (answer += 1000);
    }
  }
  return answer;
}
