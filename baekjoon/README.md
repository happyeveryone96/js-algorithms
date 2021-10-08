백준에서 자바스크립트를 이용해 문제를 푸는 방법

언어 선택 - Node.js

- fs 모듈 추가하기
```
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(' ');
// 또는 const input = fs.readFileSync("/dev/stdin").toString().split('\n');
```
문자열로 받아온 데이터를 공백(' ') 또는 줄바꿈('\n')을 기준으로 나누어서 input에 배열로 저장하는 코드

- readline 모듈 추가하기
```
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
  // 답안 작성
  process.exit();
});
```
