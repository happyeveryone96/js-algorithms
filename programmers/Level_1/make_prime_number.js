function solution(nums){
  var result = 0;
  var sum = [];
    
  for(var i = 0; i < nums.length; i++){
    for(var j = i+1; j < nums.length; j++){
      for(var k = j+1; k < nums.length; k++){
        var temp = nums[i] + nums[j] + nums[k]
        sum.push(temp);
      }
    }
  }
  for(var l = 0; l < sum.length; l++){
    if(isPrime(sum[l])){
      result++;
    }
  }
    
  return result;
}

function isPrime(sum){
  for(var i = 2; i*i <= sum; i++){
    if(sum % i === 0) return false;
  }
    
  return true;
}
