const complexNumberMultiply = (a, b) => {
  const aReal = a.split("+")[0];
  const aImaginary = a.split("+")[1].slice(0, -1);

  const bReal = b.split("+")[0];
  const bImaginary = b.split("+")[1].slice(0, -1);

  return `${aReal * bReal - aImaginary * bImaginary}+${
    aReal * bImaginary + aImaginary * bReal
  }i`;
};
