function d(n) {
  let number = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
      // number를 10으로 나눠가면서 각 자리수를 result에 더해준다.
      result += number % 10;
      number = Math.floor(number / 10);
  }
  // 입력받은 수 와 result를 더하여 return
  return n + result;
}

// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(10001).fill(true);

for (let i = 0; i < 10000; i++) {
  // 셀프넘버가 아니면 false로 변환.
  selfNumbers[d(i)] = false;
  if (selfNumbers[i]) {
      // true index만 출력
      console.log(i);
  }
}