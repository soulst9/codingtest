function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let maxMoney = 0;
  for (var i = 0; i < keyboards.length; i++) {
    for (var j = 0; j < drives.length; j++) {
      const curMoney = keyboards[i] + drives[j];
      if (curMoney <= b) {
        maxMoney = Math.max(maxMoney, curMoney);
      }
    }
  }

  if (maxMoney === 0) {
    return -1;
  }
  return maxMoney;
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
