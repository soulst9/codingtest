const arr = [1, 1, 0, -1, -1];

plusMinus(arr);

function plusMinus(arr) {
  // Write your code here
  const result = [0, 0, 0];
  arr.forEach((element) => {
    if (element > 0) {
      result[0] += 1;
    } else if (element < 0) {
      result[1] += 1;
    } else {
      result[2] += 1;
    }
  });

  result.forEach((element) => {
    console.log((element / arr.length).toFixed(6));
  });
}
