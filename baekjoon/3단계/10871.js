const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const input2 = input[0].split(' '); 
const input3 = input[1].split(' '); 
let result = [];

for (let i=0; i < input2[0]; i++) {
    if (parseInt(input3[i]) < parseInt(input2[1])) {
        result.push(parseInt(input3[i]))
    }
}

const answer = result.join(' ');
console.log(answer);
