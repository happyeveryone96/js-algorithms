function solution(n) {
    var answer = 0;
    let arr = []
    let strNum = n.toString();
    let len = strNum.length;
    for (let i = 0; i < len; i++) {
        arr.push(strNum[i]);
    }
    let sortedArr = arr.sort((a,b) => b - a);
    answer = Number(sortedArr.join(''));
    return answer;
}
