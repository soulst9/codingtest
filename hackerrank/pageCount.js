function pageCount(n, p) {
  // Write your code here
  // const min = Math.min(n - p, p);
  let totalPage = Math.floor(n / 2);
  let openPage = Math.floor(p / 2);
  const min = Math.min(totalPage - openPage, openPage);
  return min;
}

console.log(pageCount(5, 4));
console.log(pageCount(6, 2));
console.log(pageCount(5, 3));
console.log(pageCount(6, 5));
