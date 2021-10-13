const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let i = 0
while (parseInt(input[i].split(' ')[0]) !== 0 && parseInt(input[i].split(' ')[1]) !== 0) {
    console.log(`${parseInt(input[i].split(' ')[0])+parseInt(input[i].split(' ')[1])}`);
    i++
}
