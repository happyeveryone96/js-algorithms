function solution(s) {
  let a = s.split(' ').sort((a,b) => a - b);
  const answer = `${a[0]} ${a[a.length-1]}`
  return answer;
}