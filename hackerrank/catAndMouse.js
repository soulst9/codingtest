function catAndMouse(x, y, z) {
  do {
    if (x === z || y === z) {
      break;
    }
    if (x > z) {
      x -= 1;
    } else {
      x += 1;
    }
    if (y > z) {
      y -= 1;
    } else {
      y += 1;
    }
  } while (true);

  if (x === z && y === z) {
    return "Mouse C";
  } else if (x === z) {
    return "Cat A";
  } else if (y === z) {
    return "Cat B";
  }
}

// console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(4, 44, 44));
