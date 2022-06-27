function solution(s) {
  var answer = 0;

  const ar = s.split("");
  let substrings = new Set();
  for (let i = 0; i < ar.length; i++) {
    let sub = s.substring(i);
    const subarr = sub.split("");
    for (let j = 0; j < subarr.length; j++) {
      let subSub = sub.substring(0, subarr.length - j);
      if (isNoDuplicateChar(subSub)) {
        substrings.add(subSub);
      }
      // count++;
    }
  }
  return substrings.size;
}

function isNoDuplicateChar(str) {
  return !/(.).*\1/.test(str);
}

console.log(solution("abac"));
console.log(solution("abcd"));
console.log(solution("zxzxz"));
