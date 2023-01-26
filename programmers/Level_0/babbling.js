// 1. babbling의 요소들을 순회하면서 체크
// 2. 발음할 수 있는 문자열을 제거 -> 그냥 제거하면 제거된 후 떨어져 있었던 문자열을 발음할 수 있는 경우가 생김
// ex ) wyeoo -> ye 제거 -> woo -> woo 제거
// 해결 방법 -> 제거하지 않고 다른 문자열('X')로 대체
// 3. X를 모두 제거 후 문자열의 길이가 0이면 answer에 1을 더해준다.

function solution(babbling) {
  var answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    const filteredStr = babbling[i]
      .replace("aya", "X")
      .replace("ye", "X")
      .replace("woo", "X")
      .replace("ma", "X")
      .replace(/\X/g, "");
    if (filteredStr.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
