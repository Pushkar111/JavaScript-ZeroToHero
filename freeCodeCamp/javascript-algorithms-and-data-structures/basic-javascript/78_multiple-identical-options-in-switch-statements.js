function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
      answer = 'Low';
      break;
    case 2:
      answer = 'Low';
      break;
    case 3:
      answer = 'Low';
      break;

    case 4:
      answer = 'Mid';
      break;
    case 5:
      answer = 'Mid';
      break;
    case 6:
      answer = 'Mid';
      break;
    case 7:
      answer = 'High';
      break;
    case 8:
      answer = 'High';
      break;
    case 9:
      answer = 'High';
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));