var marks = [90, 43, 67, 87, 54, 44, 12, 34, 2, 4, 56];

const sortByValue = (a, b) => {
  return a - b;
};

marks.sort(sortByValue);
// marks.sort((a, b) => {
//   return a - b;
// });

console.log(marks);

var lang = ["hindi", "english", "kannada", "malayalam", "tamil"];

lang.sort((a, b) => {
  return a.localeCompare(b);
});
console.log("sort ASC", lang);

lang.sort((a, b) => {
  return b.localeCompare(a);
});
console.log("sort DESC", lang);
