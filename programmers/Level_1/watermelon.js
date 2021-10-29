function solution(n) {
    var answer = '';
    let result = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            result.push('수');
        } else {
            result.push('박');
        }
    }
    answer = result.join('');
    return answer;
}
