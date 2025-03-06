const student = [
    {
        sname: "Amit",
        sclass: 12,
        sroll: 7,
        sage: 14,
        marks: 99,
    },
    {
        sname: "Dharmik",
        sclass: 12,
        sroll: 8,
        sage: 14,
        marks: 98,
    },
    {
        sname: "Rohit",
        sclass: 12,
        sroll: 9,
        sage: 14,
        marks: 97,
    },
    {
        sname: "Rahul",
        sclass: 12,
        sroll: 10,
        sage: 14,
        marks: 96,
    },
];

const marksChecker = (student) => {
    if (student.marks > 90) {
        console.log(`${student.sname} got A grade`);
    }
};

const displayStudent = (student) => {
    console.log(`Name : ${student.sname}, Class : ${student.sclass}, Roll : ${student.sroll}`);
};

const test = (student, cb) => {
    // console.log(student);
    cb(student.sname);
};

test(student, displayStudent);
test(student, marksChecker);
