var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b)); // 몫
console.log(a%b); // 나머지
