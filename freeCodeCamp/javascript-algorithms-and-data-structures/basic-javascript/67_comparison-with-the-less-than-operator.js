function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(15));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));