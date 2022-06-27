function staircase(n) {
  //   const results = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    result.length = 0;
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        result.push("#");
      } else {
        result.push(" ");
      }
    }
    console.log(result.join(""));
  }
}

staircase(4);

// 0 0 0 1
// 0 0 1 1
// 0 1 1 1
// 1 1 1 1
