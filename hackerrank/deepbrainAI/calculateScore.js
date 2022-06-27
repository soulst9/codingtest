// Approximate Matching

function calculateScore(text, prefixString, suffixString) {
  // Write your code here
  const textArr = text.split("");
  // console.log(textArr);
  const prefixArr = prefixString.split("");
  const suffixArr = suffixString.split("");

  let prefixCount = 0,
    suffixCount = 0,
    maxPrefixCount = 0,
    maxSuffixCount = 0;
  for (let i = 0; i < textArr.length; i++) {
    for (let j = 0; j < prefixArr.length; j++) {
      for (let k = j; k < prefixArr.length; k++) {
        if (textArr[i] !== prefixArr[k]) {
          prefixCount = 0;
        } else {
          // console.log(textArr[i], prefixArr[k]);
          prefixCount++;
        }
      }
    }
    maxPrefixCount = Math.max(maxPrefixCount, prefixCount);
  }

  for (let i = 0; i < textArr.length; i++) {
    for (let j = 0; j < suffixArr.length; j++) {
      let bStart = true;
      suffixCount = 0;
      for (let k = j; k < suffixArr.length; k++) {
        console.log(textArr[i], suffixArr[k]);
        let c = i;
        if (textArr[c] !== suffixArr[k]) {
          if (bStart) {
            break;
          } else {
            suffixCount = 0;
          }
          bStart = false;
        } else {
          bStart = true;
          c++;
          suffixCount++;
        }
      }
      maxSuffixCount = Math.max(maxSuffixCount, suffixCount);
    }
  }

  // console.log(maxPrefixCount);
  console.log(maxSuffixCount);

  // for (let i = 0; i < textArr.length; i++) {
  //   if (textArr[i] === prefixArr[i]) {
  //     prefixCount++;
  //   } else {
  //     break;
  //   }
  // }
  // prefixString;
}

console.log(calculateScore("engine", "raven", "ginkgo"));
