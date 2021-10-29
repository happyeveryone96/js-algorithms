function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i] / divisor) === true) {
            answer.push(arr[i]);
        }
    }
    if (answer.length > 0) {
        answer = answer.sort((a,b) => a - b);
    } else {
        answer = [-1];
    }
    return answer;
}
