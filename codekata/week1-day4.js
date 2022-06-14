const sameReverse = (num) => {
  return num == String(num).split("").reverse().join("") ? true : false;
};
