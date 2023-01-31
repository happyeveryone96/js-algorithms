function solution(price) {
  let discountedPrice = 0;
  if (price >= 100000 && price < 300000) {
    discountedPrice = 0.95 * price;
  } else if (price >= 300000 && price < 500000) {
    discountedPrice = 0.9 * price;
  } else if (price >= 500000) {
    discountedPrice = 0.8 * price;
  } else {
    return price;
  }
  return Math.floor(discountedPrice);
}
