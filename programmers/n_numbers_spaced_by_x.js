function solution(x, n) {
    var answer = [];
    let num = x;
    for (i=0; i<n; i++) {
        answer.push(num);
        num += x
    }
    return answer;
}
