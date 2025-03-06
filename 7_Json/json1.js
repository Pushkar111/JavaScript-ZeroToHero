//json :java script object notation
//key:value

// var sname = "amit"
// var sage = 25
//{} <- object
//..


/*
singleton --> design pattern
1. class should have private constructor
2. class should have static method to get the instance of the class
Object.create();

object literal --> design pattern
const student = {
    
}

*/


const student = {
    name: "Rahul",
    age: 18,
    std: 12,
    address: {
        street: "CG road",
        city: "Ahmedabad",
        state: "Gujarat",
        pincode: 380015,
    },
};

console.log("student :", student);

let sKeys = Object.keys(student); // return key
console.log("student Keys :", sKeys);

let sValues = Object.values(student); // return value
console.log("student Values :", sValues);

let sEntries = Object.entries(student); // return [key, value]
console.log("student Entries :", sEntries);



var sname  = student.name;
console.log("student name :", sname);

var sname = student["name"];
console.log("student name :", sname);


var sage = student.age;
console.log("student age :", sage);

var sage = student["age"];
console.log("student age :", sage);


var sstd = student.std;
console.log("student std :", sstd);

var sstd = student["std"];
console.log("student std :", sstd);


var sadd = student.address;
console.log("student address :", sadd);

var sadd = student["address"];
console.log("student address :", sadd);



console.log("student address street :", student.address.street);
console.log("student address City :", student.address.city);
console.log("student address state :", student.address.state);
console.log("student address pincode :", student.address.pincode);

