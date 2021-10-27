function solution(arr1, arr2) {
    let len = arr1.length;
    let answer = Array.from(Array(len), () => []);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}
