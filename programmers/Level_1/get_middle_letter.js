function solution(s) {
    var answer = [];
    if (s.length % 2 === 0) {
        answer.push(s[Number((s.length)/2-1)],s[Number((s.length)/2)]);
    } else {
        answer.push(s[Number((s.length-1)/2)]);
    }
    answer = answer.join('');
    return answer;
}
