function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    let result = answer.filter((element, index) => {
        return answer.indexOf(element) === index;
    });
    result = result.sort((a,b) => a-b);
    return result;
}
