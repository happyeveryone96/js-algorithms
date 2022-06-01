const fs = require("fs");

const input = fs.readFileSync("/dev/stdin");

const initArr = Array(26).fill(-1);
const alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < alphabetArr.length; i++) {
  initArr[i] = input.indexOf(alphabetArr[i]);
}

console.log(initArr.join(" "));
