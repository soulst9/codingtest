function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applesLocation = apples.map((el) => el + a);
  const orangesLocation = oranges.map((el) => el + b);

  let applesCount = 0;
  let orangesCount = 0;

  let maxCount = a >= b ? a : b;

  for (let i = 0; i < maxCount; i++) {
    if (applesLocation[i] >= s && applesLocation[i] <= t) {
      applesCount++;
    }
    if (orangesLocation[i] >= s && orangesLocation[i] <= t) {
      orangesCount++;
    }
  }

  console.log(applesCount);
  console.log(orangesCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1, 3, 5], [5, -6]);
