const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const num = input[0];
const numbers = input[1].split(' ');

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers[0],numbers[num-1]);
