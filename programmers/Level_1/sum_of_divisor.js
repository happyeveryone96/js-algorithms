function solution(n) {
    var answer = 0;
    for (let i = 0; i < n; i++) {
        if (Number.isInteger(n / i) === true) {
            answer += i
        }
    }
    answer += n
    return answer;
}
