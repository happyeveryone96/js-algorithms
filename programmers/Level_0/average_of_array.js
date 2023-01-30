function solution(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const answer = sum / numbers.length;
  return answer;
}
