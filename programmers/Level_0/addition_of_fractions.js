// 1. 구하려는 분모는 분모들의 최소공배수
// 2. 구하려는 분자는 원래 분자들에 1에서 구한 값을 분모로 나눈 값을 곱해준 후 더하기
// 3. 두 분수를 더한 값을 기약 분수로 만들기 (최대공약수 사용)
function solution(numer1, denom1, numer2, denom2) {
  // 최대공약수
  const gcd = (num1, num2) => {
    let gcd = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  };
  // 최소공배수(분모)
  const lcm = (denom1 * denom2) / gcd(denom1, denom2);

  // 분자
  const numer3 = (lcm / denom1) * numer1 + (lcm / denom2) * numer2;

  // 위에서 구한 분모와 분자를 각각 최대공약수로 나눠줌
  return [numer3 / gcd(lcm, numer3), lcm / gcd(lcm, numer3)];
}
