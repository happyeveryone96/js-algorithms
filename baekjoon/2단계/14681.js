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
  const x = parseInt(input[0]);
  const y = parseInt(input[1]);
    
  if (x > 0 && y > 0) {
    console.log('1')
} else if (x < 0 && y > 0) {
    console.log('2')
} else if (x < 0 && y < 0) {
    console.log('3')
} else if (x > 0 && y < 0) {
    console.log('4')
}
  process.exit();
});

// 런타임 에러(해당 경로 접근 권한 문제)
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const x = parseInt(input[0]);
// const y = parseInt(input[1]);

// if (x > 0 && y > 0) {
//     console.log('1')
// } else if (x < 0 && y > 0) {
//     console.log('2')
// } else if (x < 0 && y < 0) {
//     console.log('3')
// } else if (x > 0 && y < 0) {
//     console.log('4')
// }
