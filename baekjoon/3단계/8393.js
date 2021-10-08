const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  const num = parseInt(input[0]);
    
    const numList = [];

    for (let i=1; i < num+1; i++) {
        numList.push(i)
    }

    const result = numList.reduce(function add(sum, currValue){
        return sum + currValue;
    },0)

    console.log(result);
  process.exit();
});

// 틀렸습니다
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin");

// const num = input;
// const numList = [];

// for (let i=1; i < num+1; i++) {
//     numList.push(i)
// }

// const result = numList.reduce(function add(sum, currValue){
//     return sum + currValue;
// },0)

// console.log(result);
