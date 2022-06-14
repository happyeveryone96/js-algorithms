const minPathSum = (grid) => {
  const n = grid[0].length;
  const m = grid.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;

      if (i === 0) {
        grid[j][i] += grid[j - 1][i];
        continue;
      }

      if (j === 0) {
        grid[j][i] += grid[j][i - 1];
        continue;
      }
      grid[j][i] += Math.min(grid[j][i - 1], grid[j - 1][i]);
    }
  }
  return grid[m - 1][n - 1];
};
