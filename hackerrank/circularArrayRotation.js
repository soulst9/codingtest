function circularArrayRotation(a, k, queries) {
  // Write your code here

  for (let i = 0; i < k; i++) {
    a.unshift(a.pop())
  }
  // console.log(a)

  const result = []
  for (let i = 0; i < queries.length; i++) {
    result.push(a[queries[i]])
  }
  return result
}

console.log(circularArrayRotation([1,2,3], 2, [0,1,2]))
console.log(circularArrayRotation([3,4,5], 2, [1,2]))