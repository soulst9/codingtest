function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0
  for (; i <= j; i++) {
    // console.log(i)
    let ar = i.toString().split("").slice(0)
    // const lastIndexArr = ar.
    const reverse = Number(ar.reverse().join(""))
    // console.log(reverse)

    if (Math.abs(i - reverse) % k === 0) {
      count++
    }
  }

  return count
}

console.log(beautifulDays(20, 23, 6))

