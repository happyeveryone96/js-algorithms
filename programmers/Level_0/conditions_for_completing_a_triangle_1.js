function solution(sides) {
  const largestSide = Math.max(...sides);
  const otherSides = sides.filter((s) => s !== largestSide);
  if (otherSides.length === 0) {
    return 1;
  } else if (otherSides.length === 1) {
    return 1;
  } else if (largestSide < otherSides[0] + otherSides[1]) {
    return 1;
  } else {
    return 2;
  }
  return otherSides;
}
