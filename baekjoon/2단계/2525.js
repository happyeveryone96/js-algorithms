const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().split('\n'); 

const time = parseInt(input[0].split(' ')[0]) * 60 + parseInt(input[0].split(' ')[1]) + parseInt(input[1]); 

const H = parseInt(time / 60); 
const M = parseInt(time % 60); 

console.log(H >= 24 ? H - 24 : H, M);