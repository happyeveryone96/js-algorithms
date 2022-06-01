let input = require('fs').readFileSync('/dev/stdin').toString();
console.log(input.charCodeAt(0));

// charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
