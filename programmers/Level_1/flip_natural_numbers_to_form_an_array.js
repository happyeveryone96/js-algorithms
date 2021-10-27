function solution(n) {
    var answer = [];
    let strNum = n.toString();
    let len = strNum.length;
    for (let i = len-1; i>-1; i--) {
        answer.push(Number(strNum[i]));
    }
    return answer;
}
