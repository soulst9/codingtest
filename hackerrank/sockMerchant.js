function sockMerchant(n, ar) {
  // Write your code here
  const pairs = {};
  ar.forEach((element) => {
    if (pairs[element]) {
      pairs[element] += 1;
    } else {
      pairs[element] = 1;
    }
  });

  let sum = 0;
  Object.values(pairs).forEach((element) => {
    sum += Math.floor(element / 2);
  });

  return sum;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
