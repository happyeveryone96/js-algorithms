function solution(N, stages) {
    var answer = [];
    let cntFailArr = Array(N+1).fill(0);
    let cntTryArr = Array(N+1).fill(0);
    let failureRate = [];
    
    for (let i = 0; i < stages.length; i++) {
        cntFailArr[stages[i]-1] += 1;
        for (let j = 0; j < stages[i]; j++) {
            cntTryArr[j] += 1;
        }
    }
    
    for (let i = 0; i < N; i++) {
        let failRatio = cntFailArr[i]/cntTryArr[i];
        failureRate.push({idx:i, ratio: failRatio});
    }
    let sortedfailureRate = failureRate.sort((a,b) => b.ratio - a.ratio);
    for (let i = 0; i < N; i++) {
        answer.push(sortedfailureRate[i].idx+1);
    }
    return answer;
}

// 1. 실패 횟수 배열 생성
// 2. 도전 횟수 배열 생성
// 3. 실패율 배열 생성(배열 안의 객체 형식) [{idx:1, ratio: failRatio}, ...]
// 4. ratio 기준 내림차순으로 정렬 
// 5. idx에 1을 더해준 값을 answer에 추가 (1번 스테이지 === 인덱스 0)
