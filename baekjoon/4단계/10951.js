const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let i = 0
while (parseInt(input[i].split(' ')[0]) < 10 && parseInt(input[i].split(' ')[1]) < 10) {
    console.log(`${parseInt(input[i].split(' ')[0])+parseInt(input[i].split(' ')[1])}`);
    i++
}

// 이렇게 작성해도 정답
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// let i = 0
// while (parseInt(input[i].split(' ')[0]) < 10) {
//     console.log(`${parseInt(input[i].split(' ')[0])+parseInt(input[i].split(' ')[1])}`);
//     i++
// }
