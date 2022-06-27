function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) {
    return "NO";
  }

  if ((x2 - x1) % (v1 - v2) == 0) {
    return "YES";
  }
  return "NO";
  //   let i = 0;
  //   let bResult = false;
  //   let x1jumped = 0;
  //   let x2jumped = 0;

  //   if (x1 < x2) {
  //     do {
  //       i += 1;
  //       x1jumped = x1 + v1 * i;
  //       x2jumped = x2 + v2 * i;
  //       if (x1jumped === x2jumped) {
  //         console.log(x1jumped, x2jumped);
  //         bResult = true;
  //         break;
  //       }
  //     } while (x1jumped < x2jumped);
  //   } else {
  //     do {
  //       i += 1;
  //       x1jumped = x1 + v1 * i;
  //       x2jumped = x2 + v2 * i;
  //       if (x1jumped === x2jumped) {
  //         bResult = true;
  //         break;
  //       }
  //     } while (x1jumped > x2jumped);
  //   }

  return bResult ? "YES" : "NO";
}

// console.log(kangaroo(0, 2, 5, 3));
// console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 7, 33, 3));
