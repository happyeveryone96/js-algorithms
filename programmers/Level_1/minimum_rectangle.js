function solution(sizes) {
    var answer = [];
    let horizontalArr = [];
    let verticalArr = [];
    for (let i = 0; i < sizes.length; i++) {
        answer.push(sizes[i].sort((a,b) => a-b));
    }
    for (let i = 0; i < answer.length; i++) {
        horizontalArr.push(answer[i][0]);
        verticalArr.push(answer[i][1]);
    }
    horizontalArr = horizontalArr.sort((a,b) => a-b);
    verticalArr = verticalArr.sort((a,b) => a-b);
    let h = horizontalArr[sizes.length-1];
    let v = verticalArr[sizes.length-1];
    answer = h * v;
    return answer;
}
