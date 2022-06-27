function utopianTree(n) {
  // Write your code here
  let cur = 0
  for (let i = 0; i <= n; i++) {
    if (i > 0) {
      if (i % 2 === 0) {
        cur += 1
      } else {
        cur = cur * 2
      }
    } else {
      cur = 1
    }

    if (i === n) {
      break
    }
  }

  return cur
}

console.log(utopianTree(2));
