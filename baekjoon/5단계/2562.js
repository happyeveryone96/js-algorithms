const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let numbers = []
let nums = []
for (i=0; i<9; i++) {
    numbers.push(parseInt(input[i]));
    nums.push(parseInt(input[i]));
}

numbers.sort((a,b) => a-b);

for (i=0; i<9; i++) {
    if (nums[i] === numbers[8]) {
        console.log(numbers[8]);
        console.log(i+1);
    }
}

// n번째 수 => index n-1
// index에 1을 더해줘야 한다.
