function solution(n) {
    var answer = 0;
    let strNum = n.toString();
    let len = strNum.length;
    for (let i=0; i<len; i++) {
        answer += Number(strNum[i]);
    }
    return answer;
}
