function solution(a, b) {
    var answer = 1234567890;
    let result = [];
    for (i=0; i<a.length; i++) {
        result.push(a[i]*b[i]);
    }
    answer = result.reduce((a,c) => a + c);
    return answer;
}
