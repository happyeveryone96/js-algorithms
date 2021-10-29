function solution(s) {
    var answer = [];
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            cnt = 0;
            answer.push(' ');
        } else if (cnt % 2 === 0 && s[i] !== ' ') {
            answer.push((s[i]).toUpperCase());
            cnt++;
        } else {
            answer.push((s[i]).toLowerCase());
            cnt++
        }
    }
    answer = answer.join('');
    return answer;
}
