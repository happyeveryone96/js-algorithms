function solution(array, commands) {
    var answer = [];
    for (i=0; i<commands.length; i++) {
        let copiedArr = [...array];
        let firstElement = commands[i][0];
        let secondElement = commands[i][1];
        let thirdElement = commands[i][2];
        let newArr = copiedArr.splice(firstElement-1, secondElement-firstElement+1).sort((a,b) => a - b);
        answer.push(newArr[thirdElement-1]);
    }
    return answer;
}
