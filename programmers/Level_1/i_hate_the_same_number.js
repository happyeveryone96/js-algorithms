function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr[i] = 'X'
        } 
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'X') {
            answer.push(arr[i])
        }
    }
    
    return answer;
}
