function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((a,c) => a+c);
    let average = sum/arr.length;
    answer = average;
    return answer;
}
