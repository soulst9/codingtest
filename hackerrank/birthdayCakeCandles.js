function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0;
  let max = 0;
  candles.forEach((element) => {
    if (element > max) {
      max = element;
      count = 1;
    } else if (element === max) {
      count++;
    }
  });

  return count;
}

const result = birthdayCakeCandles([3, 2, 1, 3, 3]);
console.log(result);
