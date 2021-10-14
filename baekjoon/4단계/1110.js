const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

let num = input;
let answer = 0
let newNum;
while (true) {
    answer++;
    
    newNum = parseInt(num / 10) + num % 10;
    num = (num % 10) * 10 + newNum % 10; 

    if (input === num) {
	    break;
    } 
}
console.log(answer);
