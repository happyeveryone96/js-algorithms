function solution(n) {
    let answer = n.toString(3).split("").reverse().join("");;
    return parseInt(answer, 3);
}

// Number.toString([radix]) : Number를 진수가 radix인 값으로 반환
// String.split() : 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
// Array.reverse() : 배열의 요소를 반대로 재배열
// Array.join() : 전달받은 인자 값을 기준을 요소 사이에 반영한 문자열을 반환
// parseInt(string, radix) : 전달 받은 문자열(string)을 전달 받은 진수(radix)로 분석한 정수를 반환
