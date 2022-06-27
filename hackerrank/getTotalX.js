function getTotalX(a, b) {
  // Write your code here
  const result = [];
  for (let i = 1; i <= b[b.length - 1]; i++) {
    // console.log(i);
    let bResult = true;
    for (let j = 0; j < b.length; j++) {
      if (b[j] % i !== 0) {
        bResult = false;
      }
    }
    if (bResult) {
      result.push(i);
    }
  }

  let count = 0;
  for (let i = 0; i < result.length; i++) {
    let bResult = true;
    for (let j = 0; j < a.length; j++) {
      if (result[i] % a[j] !== 0) {
        bResult = false;
      }
    }
    if (bResult) {
      count = count + 1;
    }
  }
  return count;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([3, 4], [24, 48]));
