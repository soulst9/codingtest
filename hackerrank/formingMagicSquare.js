function formingMagicSquare(s) {
  const arr = [];
  arr.push([
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ]);
  arr.push([
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ]);
  arr.push([
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ]);
  arr.push([
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ]);
  arr.push([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ]);
  arr.push([
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ]);
  arr.push([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ]);
  arr.push([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ]);

  let min = Number.MAX_VALUE;
  for (let i = 0; i < 8; i++) {
    let minCost = 0;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        minCost += Math.abs(arr[i][j][k] - s[j][k]);
      }
    }

    if (min > minCost) min = minCost;
  }

  return min;
}

console.log(
  formingMagicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6],
  ])
);
