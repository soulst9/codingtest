function substringCalculator(s) {
  // Write your code here
  const ar = s.split("");
  let substrings = new Set();
  for (let i = 0; i < ar.length; i++) {
    let sub = s.substring(i);
    const subarr = sub.split("");
    for (let j = 0; j < subarr.length; j++) {
      let subSub = sub.substring(0, subarr.length - j);
      substrings.add(subSub);
    }
  }
  return substrings.size;
}

console.time();
console.log(main());
console.timeEnd();

// console.log(substringCalculator("kincenvizh"));
