// function appendAndDelete(s, t, k) {
//   // Write your code here

//   // let pos = s.indexOf(t)
//   // console.log(pos)
//   const s_arr = s.split("")
//   const t_arr = t.split("")

//   let s_start = 0, t_start = 0

//   let bSame = false
//   let count = 0
//   while (s_start < s_arr.length) {
//     console.log(s_start, t_start, s_arr[s_start], t_arr[t_start])
//     if (s_arr[s_start] === t_arr[t_start]) {
//       bSame = true
//       s_start++
//       t_start++
//       count++
//     } else {
//       if (bSame) break
//       s_start++
//     }
//   }

//   if (s_arr.length - count + t_arr.length - count <= k) {
//     return "Yes"
//   }
//   return "No"
// }

function appendAndDelete(s, t, k) {
  // Write your code here
  let operation = 0, i = 0;
  for( ; i < Math.min(s.length, t.length); i++) {
      if(s.charAt(i) != t.charAt(i)) break;
  }

  console.log(i)
  
  operation = s.length - i + t.length - i;
  console.log('operation', operation)
  if(k == operation || k >= s.length + t.length) return 'Yes';
  else if(k >= operation && k % 2 == operation % 2) return 'Yes';
  else return 'No';
} 


// console.log(appendAndDelete("abc", "def", 6));
// console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
// console.log(appendAndDelete("ashley", "ash", 2));
console.log(appendAndDelete("y", "yu", 2)); // No
console.log(appendAndDelete("abcd", "abcdert", 10)); // No


