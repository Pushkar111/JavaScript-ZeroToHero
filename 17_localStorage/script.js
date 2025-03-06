// window.localStorage

// localStorage.clear(); // clear the localstorage from Application

console.log(window.localStorage);
console.log(window.localStorage.length);

const nameTitle = document.getElementById("name-title");
console.log(nameTitle); // print span tag

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", (e) => {
    // localStorage.myName = e.target.value;
    localStorage.setItem("myName", e.target.value);
    // nameTitle.innerText = localStorage.myName;
    nameTitle.innerText = localStorage.getItem("myName");
});

console.log(localStorage.address); // undefined
console.log(localStorage.getItem("address")); // null

console.log("---------------------------------------------------------------------------------------------");

const ageTitle = document.getElementById("age-title");
console.log(ageTitle); // print span tag

const ageInput = document.getElementById("ageInput");

ageInput.addEventListener("input", (e) => {
    localStorage.setItem("age", e.target.value);
    ageTitle.innerText = localStorage.getItem("age");
});

console.log("---------------------------------------------------------------------------------------------");

const employees = JSON.parse(localStorage.getItem("employees")) || {};

const empIdInput = document.getElementById("empId");
const empNameInput = document.getElementById("empName");
const empSalaryInput = document.getElementById("empSalary");

empIdInput.addEventListener("input", (e) => {
    // JSON.stringify(employees); // convert object into string
    // JSON.parse(JSON.stringify(employees)); // convert string into object
    employees.id = e.target.value;
    localStorage.setItem("employees", JSON.stringify(employees));
});

empNameInput.addEventListener("input", (e) => {
    // JSON.stringify(employees); // convert object into string
    // JSON.parse(JSON.stringify(employees)); // convert string into object
    employees.name = e.target.value;
    localStorage.setItem("employees", JSON.stringify(employees));
});

empSalaryInput.addEventListener("input", (e) => {
    // JSON.stringify(employees); // convert object into string
    // JSON.parse(JSON.stringify(employees)); // convert string into object
    employees.salary = e.target.value;
    localStorage.setItem("employees", JSON.stringify(employees));
});

const result = document.getElementById("result");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const myHTML = `
        <h5>id: <span class="entryFromLocalStorage">${employees.id}</span></h5>
        <h5>Name: <span class="entryFromLocalStorage">${employees.name}</span></h5>
        <h5>Salary: <span class="entryFromLocalStorage">${employees.salary}</span></h5>
    `;
    result.innerHTML = myHTML;
});
