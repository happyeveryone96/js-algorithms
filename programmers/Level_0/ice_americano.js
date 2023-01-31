function solution(money) {
  let answer = [];
  answer.push(Math.floor(money / 5500));
  answer.push(money - Math.floor(money / 5500) * 5500);
  return answer;
}
