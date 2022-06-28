function viralAdvertising(n) {
  // Write your code here
  let sum = 0;
  let Shared = 5
  let Liked = 0
  for (let i = 1; i <= n; i++) {
    Liked = Math.floor(Shared/2)
    Shared = Liked * 3
    sum += Liked
    console.log(i, Shared, Liked, sum)
  }
  return sum
}

console.log(viralAdvertising(3))