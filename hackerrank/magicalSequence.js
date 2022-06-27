// 2, 12, 36, 144, 288
const n = 14;
const arr = [2, 11, 16, 12, 36, 60, 71, 17, 29, 144, 288, 129, 432, 993];

// const n = 9
// const arr = [
// 2,
// 3,
// 7,
// 8,
// 14,
// 39,
// 145,
// 76,
// 320]

const filters = [];
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const filter = [];
    if (arr[j] % arr[i] == 0) {
      filter.push(arr[i]);
      filter.push(arr[j]);
      filters.push(filter);
    }
  }
}

// console.log(filters)

let max_subsequence_count = 0;
function getSubsequenceCount(init) {
  let subsequence_count = 0;
  let findNextSeq = init;
  for (let i = 0; i < filters.length; i++) {
    // console.log('compare', filters[i][0], findNextSeq)

    if (filters[i][0] === findNextSeq) {
      // console.log('pass', findNextSeq)
      subsequence_count++;
      findNextSeq = filters[i][1];
    }
  }
  return subsequence_count + 2;
}

for (let k = 0; k < filters.length; k++) {
  const cur_subsequence_count = getSubsequenceCount(filters[k][1]);
  max_subsequence_count = Math.max(
    max_subsequence_count,
    cur_subsequence_count
  );
}

console.log("================");
console.log("max_subsequence_count", max_subsequence_count);
console.log("================");
