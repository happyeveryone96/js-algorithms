const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let num = parseInt(input[0])*parseInt(input[1])*parseInt(input[2])

let strNum = num.toString();

let cnt = [0,0,0,0,0,0,0,0,0,0]

for (i=0; i < strNum.length; i++) {
    if (strNum[i] === '0') {
        cnt[0] += 1
    } else if (strNum[i] === '1') {
        cnt[1] += 1
    } else if (strNum[i] === '2') {
        cnt[2] += 1
    } else if (strNum[i] === '3') {
        cnt[3] += 1
    } else if (strNum[i] === '4') {
        cnt[4] += 1
    } else if (strNum[i] === '5') {
        cnt[5] += 1
    } else if (strNum[i] === '6') {
        cnt[6] += 1
    } else if (strNum[i] === '7') {
        cnt[7] += 1
    } else if (strNum[i] === '8') {
        cnt[8] += 1
    } else if (strNum[i] === '9') {
        cnt[9] += 1
    }
}

for (i=0; i<10; i++) {
    console.log(cnt[i])
}
