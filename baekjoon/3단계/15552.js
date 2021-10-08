const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let result = '';
for (let i=1; i <= input[0]; i++) {
    let num = input[i].split(' ');
    let a = parseInt(num[0]);
    let b = parseInt(num[1]);
    result += a+b +'\n';
}
console.log(result);

// 매 번 console.log로 출력하면 시간초과를 받고, 
// 하나의 문자열에 결과값과 개행문자를 저장해서 마지막에 출력
