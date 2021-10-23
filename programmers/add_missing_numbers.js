function solution(numbers) {
    var answer = -1;
    let sum = numbers.reduce((a,c) => a + c);
    answer = 45-sum;
    return answer;
}
