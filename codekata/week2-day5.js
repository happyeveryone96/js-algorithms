function getMaxArea(height) {
  const areaArr = [];

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (height[i] < height[j]) {
        areaArr.push(height[i] * (j - i));
      } else {
        areaArr.push(height[j] * (j - i));
      }
    }
  }

  return Math.max(...areaArr);
}
