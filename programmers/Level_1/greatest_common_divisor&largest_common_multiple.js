// 유클리드 호제법
function solution(n, m) {
    var answer = [];
    // 최대공약수
    const gcd = (n, m) => {
        while (m > 0) {
            let temp = m;
            m = n % m;
            n = temp;
        }
    return n;
    };

    // 최소공배수
    const lcm = (n, m) => {
      return (n * m) / gcd(n, m);
    };
    answer.push(gcd(n,m),lcm(n,m));
    return answer;
}
