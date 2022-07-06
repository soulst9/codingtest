function permutationEquation(p) {
  // Write your code here

  const result1 = [], result2 = []
  for (let i = 1; i <= p.length; i++) {
    result1.push(p.indexOf(i)+1)
    // console.log(p.indexOf(i)+1)
  }

  // console.log(result1)

  for (let i = 0; i < result1.length; i++) {
    result2.push(p.indexOf(result1[i])+1)
  }

  return result2
}

console.log(permutationEquation([2,3,1]))