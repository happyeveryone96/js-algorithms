function solution(price, money, count) {
    var answer;
    let sumPrice = 0;
    for (let i = 1; i < count+1; i++) {
        sumPrice += price * i;
    }
    if (sumPrice > money) {
        answer = sumPrice - money;
    } else {
        answer = 0;
    }
    return answer;
}
