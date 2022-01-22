function solution(arr) {
  let answer;
  let getLCM = (num1, num2) => {
    let lcm = 1;

    while (true) {
      if ((lcm % num1 == 0) && (lcm % num2 == 0)) {
        break;
      }
      lcm++;
    }
    return lcm
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer = getLCM(arr[i], arr[i + 1])
    } else {
      answer = getLCM(answer, arr[i])
    }
  }

  return answer;
}