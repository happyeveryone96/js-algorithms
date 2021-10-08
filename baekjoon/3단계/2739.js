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
    
    for (i = 1; i < 10; i++) {
        console.log(`${num} * ${i} = ${num*i}`)
    }
  process.exit();
});

// 출력 형식이 잘못되었습니다
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin')

// const num = input

// for (i = 1; i < 10; i++) {
//     console.log(`${num} * ${i} = ${num*i}`)
// }
