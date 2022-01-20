function solution(x) {
    var answer;
    let strNum = x.toString();
    let sum = 0;
    for (let i=0; i<strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    if (x%sum === 0) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
