function solution(arr) {
    let answer;
    let copiedArr = [...arr];
    let sortedArr = copiedArr.sort((a,b) => b - a);
    let min = sortedArr[arr.length-1]
    answer = arr.filter(arr => arr !== min);
    if (answer.length === 0) {
        return [-1];
    } else {
        return answer;
    }
}
