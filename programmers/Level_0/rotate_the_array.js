function solution(numbers, direction) {
  if (direction === "right") {
    const lastNum = numbers.splice(numbers.length - 1, 1)[0];
    numbers.unshift(lastNum);
  } else if (direction === "left") {
    const firstNum = numbers.splice(0, 1)[0];
    numbers.push(firstNum);
  }
  return numbers;
}
