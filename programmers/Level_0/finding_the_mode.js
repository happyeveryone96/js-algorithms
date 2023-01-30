function solution(array) {
  const answer = [];
  const arr = new Array(1000).fill(0);
  for (let i = 0; i < array.length; i++) {
    arr[array[i]] += 1;
  }
  const maxCount = arr.filter((num) => num === Math.max(...arr))[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxCount) {
      answer.push(i);
    }
  }
  return answer.length > 1 ? -1 : answer[0];
}
