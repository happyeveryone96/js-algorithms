function solution(n) {
  let answer = 0;
  for (let i = 0; i < String(n).length; i++) {
    answer += Number(String(n)[i]);
  }
  return answer;
}
