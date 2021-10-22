function solution(lottos, win_nums) {
    var answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    const zeros = lottos.filter(lotto => lotto === 0).length;
    let min;
    let max;
    if (7-correct >=6) {
        min = 6;
    } else {
        min = 7-correct;
    }
    
    if (min-zeros < 1) {
        max = 1;
    } else {
        max = min-zeros;
    }
    
    answer.push(max,min);
    return answer;
}
