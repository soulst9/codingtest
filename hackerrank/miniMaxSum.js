const arr = [1, 2, 3, 4, 5];

let min = 0,
  max = 0;

for (var i = 0; i < arr.length; i++) {
  const sum = arr
    .slice()
    .filter((element, index) => index !== i)
    .reduce((prev, element) => prev + element);

  min = min === 0 ? sum : Math.min(sum, min);
  max = Math.max(sum, max);
}

console.log(min, max);

// console.log(arr.splice(3, 1));
