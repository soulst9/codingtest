function findDigits(n) {
  // Write your code here

  const digits = n.toString().split("").filter(digit => digit !== '0').filter(digit => n % digit === 0);
  return digits.length
}

console.log(findDigits(12))
console.log(findDigits(124))
console.log(findDigits(111))
console.log(findDigits(1012))
