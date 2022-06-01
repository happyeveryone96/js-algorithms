const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const firstNum = Number(input[0].split("").reverse().join(""));
const secondNum = Number(input[1].split("").reverse().join(""));

if (firstNum > secondNum) {
  console.log(firstNum);
} else {
  console.log(secondNum);
}
