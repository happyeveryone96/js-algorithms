function solution(num) {
    let answer = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
            answer += 1;
        } else if (num % 2 === 1) {
            num = num * 3 + 1;
            answer += 1;
        } else if (answer > 500) {
            break;
        }
    }
    if (answer > 500) { 
        answer = -1;
    }
    return answer;
}

// while문 안의 두 번쨰 else if문에서 answer에 -1을 대입하면 실패
