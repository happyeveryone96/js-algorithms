function solution(n) {
    var answer = 0;
    let num = Math.sqrt(n);
    if (Number.isInteger(num) === false) {
        return -1
    } else {
        answer = (num + 1)*(num + 1);
    }
    return answer;
}
