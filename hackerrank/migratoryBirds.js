function migratoryBirds(arr) {
  // Write your code here
  const uniqueBirds = {}
  arr.forEach(element => {
    if (uniqueBirds[element]) {
      uniqueBirds[element] += 1
    } else {
      uniqueBirds[element] = 1
    }
  })

  const sortOrder = Object.entries(uniqueBirds).sort(function (a, b) {
    if(b[1] > a[1]) {
      return 1
    } else if (b[1] < a[1]) {
      return -1
    } else {
      if (a[0] > b[0]) {
        return 1
      } else if (a[0] < b[0]) {
        return -1
      }
    }  
  })

  return sortOrder[0][0]
}

console.log(migratoryBirds([1, 1, 2, 2, 3]))
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))



