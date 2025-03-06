var students = [
    {
        id: 101,
        name: "ram",
        class: 10,
    },
    {
        id: 102,
        name: "shyam",
        class: 10,
    },
    {
        id: 103,
        name: "preeti",
        class: 10,
    },
    {
        id: 104,
        name: "sita",
        class: 10,
    },
    {
        id: 105,
        name: "gita",
        class: 10,
    },
];

var marks = [
    {
        name: "ram",
        marks: 90,
    },
    {
        name: "shyam",
        marks: 80,
    },
    {
        name: "preeti",
        marks: 70,
    },
    {
        name: "sita",
        marks: 60,
    },
    {
        name: "gita",
        marks: 50,
    },
];

const searchStudent = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let student = students.find((student) => student.name === name);
            if (student) {
                resolve(student);
            } else {
                reject("Student not found");
            }
        }, 2000);
    });
};

const fetchMarks = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mark = marks.find((mark) => mark.name === studentName);
            if (mark) {
                resolve(mark);
            } else {
                reject("Marks not found");
            }
        }, 2000);
    });
};

const printCertificate = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mark = marks.find((mark) => mark.name === studentName);
            if (mark.marks >= 50) {
                resolve(`Certificate awarded to ${studentName} for scoring ${mark.marks} marks.`);
            } else {
                reject(`Certificate not awarded to ${studentName} due to insufficient marks.`);
            }
        }, 2000);
    });
};

searchStudent("ram").then((student) => {
    console.log(student);
    return fetchMarks(student.name);
}).then((mark) => {
    console.log(mark);
    return printCertificate(mark.name);
}).then((certificate) => {
    console.log(certificate);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Process completed");
});