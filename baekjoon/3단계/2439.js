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
  for(let i = num; i > 0; i-- ){
    console.log(' '.repeat(i-1) + '*'.repeat(num-i+1))
  } 
  process.exit();
});

