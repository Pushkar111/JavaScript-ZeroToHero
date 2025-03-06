// make an example that uses promises

// student data
// marks
// print Certificate
// json array of students
//marks array:{name:"Jack",marks:90}

const students = [
    {
        name: "Jack",
        marks: 90,
    },
    {
        name: "Jill",
        marks: 85,
    },
    {
        name: "John",
        marks: 78,
    },
];

function getStudentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(students);
        }, 1000);
    });
}

function getMarks(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (student.marks >= 0) {
                resolve(student.marks);
            } else {
                reject("Marks not found");
            }
        }, 1000);
    });
}

function printCertificate(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (student.marks >= 50) {
                resolve(`Certificate awarded to ${student.name} for scoring ${student.marks} marks.`);
            } else {
                reject(`Certificate not awarded to ${student.name} due to insufficient marks.`);
            }
        }, 1000);
    });
}

getStudentData().then((students) => {
    return Promise.all(
        students.map((student) => {
            return getMarks(student).then((marks) => {
                student.marks = marks;
                return printCertificate(student);
            });
        })
    );
}).then((certificates) => {
    certificates.forEach((certificate) => console.log(certificate));
}).catch((error) => {
    console.log(error);
});
