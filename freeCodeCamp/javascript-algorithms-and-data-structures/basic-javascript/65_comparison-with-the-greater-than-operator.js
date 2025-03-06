function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));