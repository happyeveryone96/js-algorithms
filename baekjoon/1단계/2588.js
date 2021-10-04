var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 입력을 공백으로 구분하지 않고 줄바꿈으로 구분해야 함
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var b1 = parseInt(String(b)[0]);
var b2 = parseInt(String(b)[1]);
var b3 = parseInt(String(b)[2]);

console.log(a*b3);
console.log(a*b2);
console.log(a*b1);
console.log(a*b);
