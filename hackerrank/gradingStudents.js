function gradingStudents(grades) {
  // Write your code here
  return grades.map((element) => {
    if (element < 38) {
      return element;
    }

    if (element % 5 >= 3) {
      return (parseInt(element / 5) + 1) * 5;
    } else {
      return element;
    }
  });
}

const grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));
