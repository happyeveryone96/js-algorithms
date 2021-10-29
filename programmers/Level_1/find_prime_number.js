function solution(n) {
    var answer = Array(n+1).fill(true).fill(false, 0, 2);;
    for(let i=2; i*i<=n; i++) {
        for(let j=i*i; j<=n; j+=i) {
            answer[j] = false;
        }
    }
    return answer.filter(e => e).length;
}

// 에라스토테네스의 체
