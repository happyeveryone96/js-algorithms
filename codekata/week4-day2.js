const maxProfit = (prices) => {
  const answerArr = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      answerArr.push(prices[j] - prices[i]);
    }
  }
  const max = Math.max(...answerArr);
  return max >= 0 ? max : 0;
};
