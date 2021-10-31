const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let num = input[0];

for (let i=1; i<num+1; i++) {
    let cntArr = [];
    if (input[i][0] === "O") {
        cntArr.push(1);
    } else if (input[i][0] === "X"){
        cntArr.push(0);
    } else {
        return;
    }
    for (let j=1; j < input[i].length; j++) {
        if (input[i][j] === "O" && input[i][j] === "O") {
            cntArr.push(cntArr[j-1]+1);
        } else if (input[i][j] === "X") {
            cntArr.push(0);
        } else if (input[i][j] === "O") {
            cntArr.push(1);
        }
    }
    let answer = cntArr.reduce((a,c) => a+c);
    console.log(answer);    
}

// if (input[i][j] === "O" && input[i][j] === "O") 
// else if (input[i][j] === "O")
// 순서 주의하기
