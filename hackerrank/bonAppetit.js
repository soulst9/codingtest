function bonAppetit(bill, k, b) {
  // Write your code here
  const sum = bill.reduce((prev, cur, index) => {
    // console.log(prev, cur, index);
    if (index === k) {
      return prev + 0;
    } else {
      return prev + cur;
    }
  }, 0);

  if (sum / 2 === b) {
    console.log("Bon Appetit");
  } else {
    console.log(`${b - sum / 2}`);
  }
  // console.log(sum);
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
