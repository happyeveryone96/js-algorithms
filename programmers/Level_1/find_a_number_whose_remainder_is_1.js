function solution(n) {
    var answer = [];
    let x;
    for (let i = 1; i < n+1; i++) {
        x = n % i;
        answer.push(x);
    }
    for (let i = 0; i < n; i++) {
        if (answer[i] === 1) {
            answer = i+1;
        }
    }
    return answer;
}
