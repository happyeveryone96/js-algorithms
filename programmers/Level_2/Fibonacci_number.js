function solution(n) {
  let newArr = [0, 1]; 

  let fib = (n) => {
      if (newArr[n] !== undefined) { 
        return newArr[n]; 
      }
      for (let i=2;i<n+1;i++) {
          newArr.push((fib(i - 2) + fib(i - 1)) % 1234567);
      }
      return newArr[n];
  }
  return fib(n); 
}