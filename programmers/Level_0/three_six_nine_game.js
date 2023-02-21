function solution(order) {
  var answer = 0;
  const threeSixNine = ["3", "6", "9"];
  for (let i = 0; i < String(order).length; i++) {
    if (threeSixNine.includes(String(order)[i])) answer += 1;
  }
  return answer;
}
