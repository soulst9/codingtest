function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let totalCount = 0;

  for (let i = 0; i < ar.length; i++) {
    let sum = 0;
    let sumCount = 0;
    for(let j = i; j < ar.length; j++) {
      if (i !== j) {
        sum = ar[i] + ar[j];
        sumCount++
        if (sum % k === 0) {
          totalCount++
        }
      }
    }
  }

  return totalCount
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))