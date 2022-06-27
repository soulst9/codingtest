// console.log(2 ** 32);

// let i = 2147483647,
//   j = 2147483647;

// console.log(i + j);

// ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const ar = [
  1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461,
  1002575010, 1007514041, 1007548981, 1004402249, 1001458909, 1004570889,
  1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041,
  1007548981, 1004402249,
];

// let sum = bigSum(1001458909, 1004570889);
// console.log(sum);

function bigSum(n, m) {
  const result = [];

  let nStr = n.toString();
  let mStr = m.toString();

  if (nStr.length > mStr.length) {
    mStr = mStr.padStart(nStr.length, 0);
  } else if (nStr.length < mStr.length) {
    nStr = nStr.padStart(mStr.length, 0);
  }

  let a = mStr,
    b = nStr;

  let round = 0;
  for (let index = a.length - 1; index >= 0; index--) {
    let digit1 = Number(a[index]);
    let digit2 = Number(b[index]);
    if (digit1 + digit2 + round >= 10) {
      result.unshift((digit1 + digit2 + round) % 10);
      round = 1;
    } else {
      let digitSum = digit1 + digit2 + round;
      round = 0;
      result.unshift(digitSum);
    }
  }

  if (round > 0) {
    result.unshift(round);
  }
  return Number(result.join(""));
}

const totalSum = ar.reduce(function (prev, curr) {
  return bigSum(prev, curr);
}, 0);

console.log(totalSum);
