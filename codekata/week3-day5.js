const factorial = (n) => {
  if (n < 0) return;
  return n !== 0 ? n * factorial(n - 1) : 1;
};
