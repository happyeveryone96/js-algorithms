function solution(absolutes, signs) {
    var answer = 123456789;
    for (i=0; i<absolutes.length; i++) {
        if (signs[i] === false) {
            absolutes[i] = -absolutes[i];
        }
    }
    answer = absolutes.reduce((a,c) => a + c);
    return answer;
}
