function breakingRecords(scores) {
  // Write your code here
  let highScoreCount, rowScoreCount, curHighScore, curLowScore;
  highScoreCount = rowScoreCount = curHighScore = curLowScore = 0;

  for (var i = 0; i < scores.length; i++) {
    if (i + 1 === scores.length) {
      break;
    }

    if (i === 0) {
      curHighScore = curLowScore = scores[i]
    }

    if (curHighScore < scores[i + 1]) {
      curHighScore = scores[i +1]
      highScoreCount++
    } else if (curLowScore > scores[i + 1]) {
      curLowScore = scores[i + 1]
      rowScoreCount++
    }
  }

  return new Array(highScoreCount, rowScoreCount)
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

