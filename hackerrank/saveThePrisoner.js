function saveThePrisoner(n, m, s) {
  // Write your code here
  if ((m % n + s - 1) % n == 0)
    return n
  else
    return (m % n + s - 1) % n
}

// console.log(saveThePrisoner(4, 6, 2))
// console.log(saveThePrisoner(5, 2, 1))
// console.log(saveThePrisoner(5, 2, 2))
// console.log(saveThePrisoner(7, 19, 2))

// 3 1 2 3 1 2 3
// (7 % 3) - 1 + 3
// console.log(saveThePrisoner(3, 7, 3))

// 3 1 2 3 1 2
// [1, 2, 3]
// (6 % 3) - 1 + 3 = 2
console.log(saveThePrisoner(3, 6, 3))
// console.log(saveThePrisoner(46934, 543563655, 46743))
// console.log(saveThePrisoner(530, 533048047, 529))
// console.log(saveThePrisoner(468840391, 468840391, 1))

// (1 % 1) - 1 + 1
console.log(saveThePrisoner(1, 1, 1))
console.log(saveThePrisoner(1, 2, 1))
// 3 4 5 1 2 3 4 5 1
// (9 % 5) - 1 + 3
// console.log(saveThePrisoner(5, 9, 3))


