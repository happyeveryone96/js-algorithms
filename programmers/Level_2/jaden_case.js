function solution(s) {
  var answer = [];
  let ans = []
  let whitespace = 0;
  
  for (let i=0; i < s.length; i++) {
      answer.push(s[i].toLowerCase())
  }
  answer = answer.join("")
  for (let i=0; i < s.length; i++) {
      if (i === 0) {
          ans.push(answer[i].toUpperCase())
      } else if (answer[i] === ' ') {
          ans.push(answer[i])
          whitespace += 1
      } else if (answer[i] !== ' ' && whitespace > 0) {
          ans.push(answer[i].toUpperCase())
          whitespace = 0
      } else {
          ans.push(answer[i])
      }
  }
  ans = ans.join("")
  return ans;
}