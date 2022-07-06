function jumpingOnClouds(c, k) {

  let e = 100
  let index = 0
  while (true){
    index += k

    if (index >= c.length) {
      index = index % c.length
    }
    e = e - 1 - c[index]*2
    if (index === 0) {
      break;
    }
  }

  return e
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))

// -1 -1 -1 -3 -3 -1 -3 -3 -1 -3 