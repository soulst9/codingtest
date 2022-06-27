function dayOfProgrammer(year) {
  // Write your code here
  const defaultYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const convertYear = [31, 15, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let month,
    day,
    sum = 0;
  let result = {};
  if (year >= 1700 && year < 1918) {
    for (let index = 0; index < defaultYear.length; index++) {
      if (index === 1) {
        if (year % 4 === 0) {
          defaultYear[index]++;
        }
      }
      sum += defaultYear[index];
      if (sum >= 256) {
        console.log(index);
        result = { month: index + 1, day: defaultYear[index] - (sum - 256) };
        break;
      }
    }
  } else if (year === 1918) {
    for (let index = 0; index < defaultYear.length; index++) {
      sum += convertYear[index];
      if (sum >= 256) {
        console.log(index);
        result = { month: index + 1, day: defaultYear[index] - (sum - 256) };
        break;
      }
    }
  } else if (year > 1918) {
    for (let index = 0; index < defaultYear.length; index++) {
      if (index === 1) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          defaultYear[index]++;
        }
      }
      sum += defaultYear[index];
      if (sum >= 256) {
        console.log(index);
        result = { month: index + 1, day: defaultYear[index] - (sum - 256) };
        break;
      }
    }
  }

  return `${result.day.toString().padStart(2, 0)}.${result.month
    .toString()
    .padStart(2, 0)}.${year}`;
}

console.log(dayOfProgrammer(1917));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(2017));
