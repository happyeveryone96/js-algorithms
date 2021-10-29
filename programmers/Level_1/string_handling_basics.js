function solution(s) {
    let answer;
    if (isNaN(s) === false && (s.length === 4 || s.length === 6)) {
        answer = true;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'e') {
                answer = false;
            }
        }
    } else {
        answer = false;
    }
    return answer;
}
