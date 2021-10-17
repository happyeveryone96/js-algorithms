const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let nums = [];

for (i=0; i<10; i++) {
    nums.push(parseInt(input[i])%42);
}

let answer = nums.filter((e,i) => {
    return nums.indexOf(e) === i;
});

console.log(answer.length);
