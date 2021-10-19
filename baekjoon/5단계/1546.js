const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let num = input[0];
let number = input[1].split(' ');

let scores = []
let newScores = []

for (i=0; i<num; i++) {
    scores.push(number[i]);
}

scores.sort((a,b) => a-b);

let maxNum = scores[num-1];

for (i=0; i<num; i++) {
    newScores.push(scores[i]/maxNum*100);
}

console.log(newScores.reduce((a,c) => a+c)/num);
