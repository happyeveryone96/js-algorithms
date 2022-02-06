function solution(n) {
  let answer = 0;
  for (let i=1; i<n+1; i++){
      let sum = 0;
      for (let j=i; j<n+1; j++) {
          sum += j;
          if (sum === n) {
              answer++;
              break;
          } else if (sum > n) {
              break;
          }
      }
  }
  return answer;
}