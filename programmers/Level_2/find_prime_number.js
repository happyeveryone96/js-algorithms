function solution(numbers) {

  let num = [...numbers];

  // 순열 통해 경우의 수 구하기
  const permutation = (arr, selectNum) =>{
      let result = [];
      if(selectNum === 1) return arr.map((v)=> [v]);

      arr.forEach((v, idx, arr)=>{
          const fixer = v;
          const restArr = arr.filter((val, index)=> index !== idx);
          const permuArr = permutation(restArr, selectNum-1);
          const combineFixer = permuArr.map((v)=> fixer + v);
          result.push(...combineFixer);
      })
      return result;
  }

  // 소수 판별
  const checkPrime = (num) => {
      let start = 2;

      while (start <= Math.sqrt(num)) {
          if (num % start++ < 1) {
              return false;
          }
      }
      return num > 1;
  }

  let answer = [];

  for(let i = 1; i <= num.length; i++) {
      permutation(num, i).forEach(v => {
          checkPrime(parseInt(v)) ?  answer.push(parseInt(v)) : answer
      })
  }
  return [...new Set(answer)].length;
}