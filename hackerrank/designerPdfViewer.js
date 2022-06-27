function designerPdfViewer(h, word) {
  // Write your code here
  const arr = word.split("")
  // console.log(arr[])
  let index;
  let max = Number.MIN_VALUE
  for (let i = 0; i < arr.length; i++) {
    index = arr[i].charCodeAt(0) - 97
    // console.log(h[index])
    max = Math.max(max, h[index])
    // console.log(arr[i].charCodeAt(0))
  }

  return max * arr.length
  // console.log(max * arr.length)
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"))