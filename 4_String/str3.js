var email = "   admin123@gmail.com  ";
console.log(email.length);
console.log(email);

email = email.trim();
console.log(email.length);
console.log(email);

email = email.trimStart();
console.log(email.length);
console.log(email);

email = email.trimEnd();
console.log(email.length);
console.log(email);

// Boolean
var x = email.includes("@");
console.log("includes(@) : " + x);

var y = email.startsWith("admin");
console.log("startsWith(admin) : " + y);

var z = email.endsWith("com");
console.log("endsWith(com) : " + z);

function customTrim(str) {
  let min = 0;
  let max = str.length - 1;

  // Function to check if a character is a whitespace
  function isWhitespace(char) {
    return (
      char === " " ||
      char === "\n" ||
      char === "\t" ||
      char === "\r" ||
      char === "\f" ||
      char === "\v"
    );
  }

  // Find the first non-whitespace character from the beginning
  while (min <= max && isWhitespace(str[min])) {
    min++;
  }

  // Find the first non-whitespace character from the end
  while (max >= min && isWhitespace(str[max])) {
    max--;
  }

  // Build the trimmed string
  let trimmed = "";
  for (let i = min; i <= max; i++) {
    trimmed += str[i];
  }

  return trimmed;
}

// Example usage
const originalStr = "   He llo, World!   ";
const trimmedStr = customTrim(originalStr);
console.log(trimmedStr);