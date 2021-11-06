function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => (a + b), 0) > budget) {
      d.pop();
    }
    return d.length;
}

// 오름차순으로 정렬하고 모든 원소의 합이 budget보다 크면 마지막 원소(제일 큰 수)를 지운다.
// 모든 원소의 합이 budget보다 작거나 같으면 d.length를 return한다.
