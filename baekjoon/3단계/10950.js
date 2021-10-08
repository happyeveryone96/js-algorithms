const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

for (let i=1; i <= input[0]; i++) {
    let num = input[i].split(' ');
    let a = parseInt(num[0]);
    let b = parseInt(num[1]);
    console.log(a + b)
}
