const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().split(' ');

const firstNum = parseInt(input[0]);
const secondNum = parseInt(input[1]);
const thirdNum = parseInt(input[2]);

if (firstNum === secondNum && secondNum === thirdNum) {
    console.log(10000 + firstNum * 1000);
} else if (firstNum === secondNum && secondNum !== thirdNum) {
    console.log(1000 + firstNum * 100);
} else if (firstNum === thirdNum && secondNum !== thirdNum) {
    console.log(1000 + firstNum * 100);
} else if (secondNum === thirdNum && firstNum !== thirdNum) {
    console.log(1000 + secondNum * 100);
} else {
    const arr = [firstNum, secondNum, thirdNum];
    console.log(Math.max(...arr) * 100);
}