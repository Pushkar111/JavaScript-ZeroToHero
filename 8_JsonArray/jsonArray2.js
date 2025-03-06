const students = [
    {
        id: 1,
        name: "John",
        marks: 80,
    },
    {
        id: 2,
        name: "Jane",
        marks: 13,
    },
    {
        id: 3,
        name: "Joe",
        marks: 90,
    },
];

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[0].name);
console.log(students[1].name);
console.log(students[2].name);

console.log("-------------------------------------------------------------------------------------------");

// using map
let updatedStudents = students.map((s) => {
    return {
        id: s.id + 500,
        name: s.name.toUpperCase(),
        marks: s.marks + 2,
    };
});

console.log("updatedStudents :", updatedStudents);

console.log("-------------------------------------------------------------------------------------------");

// using filter
let filteredStudents = students.filter((s) => {
    s.passed = (s.marks >= 33);
    return s;
});
console.log("filteredStudents :", filteredStudents);

let passStudents = filteredStudents.filter((s) => s.passed);
console.log("passStudents :", passStudents);

let failStudents = filteredStudents.filter((s) => !s.passed);
console.log("failStudents :", failStudents);


console.log("-------------------------------------------------------------------------------------------");


//  using reduce
let sumOfMarks = students.reduce((acc, s) => {
    return acc + s.marks;
}, 0);
console.log("sumOfMarks : ", sumOfMarks);
