const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = '';

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    const num = parseInt(input[0]);
    for (let i=num; 0 < i; i--) {
        result += i + '\n';
    }
    console.log(result);
  process.exit();
});
