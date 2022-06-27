// const arr = [5,4,3,2,1]
// const arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]
const arr = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854, -520, -470,
];

let min_gap_value = 999999999;
let cur_gap_value, prev_gap_value;
const result = [];

arr.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < arr.length; i++) {
  cur_gap_value = arr[i + 1] - arr[i];

  if (min_gap_value > cur_gap_value) {
    result.length = 0;
    result.push(arr[i]);
    result.push(arr[i + 1]);
    min_gap_value = cur_gap_value;
  } else if (min_gap_value === cur_gap_value) {
    result.push(arr[i]);
    result.push(arr[i + 1]);
  }
}

// return result

console.log(result);
