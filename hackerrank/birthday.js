function birthday(s, d, m) {
  // Write your code here
  let totalCount = 0;
  for (let i = 0; i < s.length; i++) {
    let sumCount = 0
    let sum = 0
    for (let j = i; j < s.length; j++) {
      sum+= s[j];
      sumCount++
      if (sumCount === m) {
        if (sum === d) {
          totalCount++
        }
        break;
      }
    }
  }
  return totalCount
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([4], 4, 1))