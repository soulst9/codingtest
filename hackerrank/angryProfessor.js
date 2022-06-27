function angryProfessor(k, a) {
  // Write your code here

  let count = 0
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 1) {
      count++
    }
  }

  if (count >= k) {
    return "NO"
  }
  return "YES"

}

console.log(angryProfessor(3, [-1, -3, 4, 2]))
console.log(angryProfessor(2, [0, -1, 2, 1]))