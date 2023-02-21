function solution(my_string, num1, num2) {
  // var answer = [];
  // for (let i = 0; i < my_string.length; i++) {
  //   if (i === num1) answer.push(my_string[num2]);
  //   else if (i === num2) answer.push(my_string[num1]);
  //   else answer.push(my_string[i]);
  // }
  // return answer.join("");
  const str = my_string.split("");
  const tmp = str[num1];
  str[num1] = str[num2];
  str[num2] = tmp;
  return str.join("");
}
