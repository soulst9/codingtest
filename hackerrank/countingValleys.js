function countingValleys(steps, path) {
  // Write your code here
  let sum = 0,
    downHillCount = 0;
  let curValley = "INIT";
  const valley = { U: 1, D: -1 };
  for (let i = 0; i < steps; i++) {
    let at = valley[path.charAt(i)];

    sum = sum + at;
    if (curValley === "INIT" && sum < 0) {
      downHillCount++;
    }

    if (sum === 0) {
      curValley = "INIT";
    } else if (sum < 0) {
      curValley = "DOWN";
    } else if (sum > 0) {
      curValley = "UP";
    }
  }
  return downHillCount;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(8, "DDUUDDUDUUUD"));
