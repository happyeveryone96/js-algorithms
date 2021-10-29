function solution(s, n) {
    const smallChar = "abcdefghijklmnopqrstuvwxyz".split('');
    const bigChar = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

    return Array.from(s).map((char) => {
        if (/[a-z]/.test(char)) {
            return smallChar[
                (smallChar.indexOf(char) + n) % smallChar.length
            ];
        } else if (/[A-Z]/.test(char)) {
            return bigChar[
                (bigChar.indexOf(char) + n) % bigChar.length
            ];
        } else {
            return char;
        }
    }).join('');
}

// Array.from()
// 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운Array 객체를 만듦

// Array.prototype.map()
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

// RegExp.prototype.test()
// 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
