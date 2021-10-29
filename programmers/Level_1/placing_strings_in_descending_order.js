function solution(s) {
    var answer = s.split('').sort().reverse().join('');
    return answer;
}

// 문자열을 split하여 요소로 쪼갠다.
// sort()를 통해 오름차순 정렬한다.
// reverse()를 통해 내림차순으로 바꿔준다.
// join()을 통해 다시 문자열로 합친다.
