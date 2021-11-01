let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0];

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');
    let studentCnt = score.shift();
    let overAvgCnt = 0;
    
    let avg = score.reduce((acc, v) => acc += v * 1, 0);
    
    avg /= studentCnt;

    for (let j = 0; j < studentCnt; j++) {
        if (score[j] > avg) {
            overAvgCnt += 1;
        }
    }
    
    let answer = ((overAvgCnt / studentCnt) * 100).toFixed(3);
    
    console.log(answer + "%");
}
