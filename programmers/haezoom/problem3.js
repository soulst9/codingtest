[1, 2], [3], [0, 3][(1, 2)], [3, 0], [3];

function solution(foods) {
  var answer = 0;

  var totalValue = foods.reduce(function (accumulator, currentValue, index) {
    return accumulator + currentValue;
  });

  let aver = totalValue / 3;
  // console.log(aver);

  // let sum = 0;
  const results = [],
    result = [];

  let start = 0;
  end = 1;

  let pos = 0,
    sum = 0;
  bResult = true;
  // console.log(foods.length);
  while (pos < foods.length) {
    sum += foods[pos];
    // console.log(sum, foods[pos]);
    if (sum === aver) {
      result.push(foods[pos]);
      // console.log("result=======>", result);
      results.push(result.slice());
      // console.log("results", results);
      sum = 0;
      pos++;
      if (foods[pos] === 0) {
        result.push(foods[pos]);
        results.push(result.slice());
        pos++;
      }
      result.length = 0;
    } else if (sum > aver) {
      console.log("fail", sum);
      results.length = 0;
      break;
    } else {
      result.push(foods[pos]);
      // console.log("result", result);
      pos++;
    }
  }

  return results.length;
}

console.log(solution([1, 2, 3, 0, 3]));
