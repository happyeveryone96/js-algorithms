const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let num = input[0];
let sum = 0;
for (let i = 0; i < num; i++) {
    sum += Number(input[1][i]);
}

console.log(sum);
