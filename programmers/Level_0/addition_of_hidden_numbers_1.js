function solution(my_string) {
  const numArr = my_string
    .split("")
    .filter((s) => !isNaN(s))
    .map((n) => n * 1);
  const answer = numArr.reduce((a, b) => a + b, 0);
  return answer;
}
