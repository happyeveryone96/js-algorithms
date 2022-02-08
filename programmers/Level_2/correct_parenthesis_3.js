function solution(s){
  let count = 0;
  for (const c of s) {
      if (c === '(') {
          count += 1;
      } else {
          if (count === 0) {
              return false;
          }
          count -= 1;
      }
  }
  return count === 0;
}

// 스택을 사용할 때보다 메모리를 적게 사용함