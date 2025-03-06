const submitHandler = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    let isError = false;

    const isEmpty = (str) => {
        return str.trim() === "";
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    if (isEmpty(name)) {
        nameError.innerText = "Name is required";
        nameError.style.display = "block";
        isError = true;
    } else {
        nameError.innerText = "";
        nameError.style.display = "none";
    }

    if (isEmpty(email)) {
        emailError.innerText = "Email is required";
        emailError.style.display = "block";
        isError = true;
    } else if (!isValidEmail(email)) {
        emailError.innerText = "Invalid email Format";
        emailError.style.display = "block";
        isError = true;
    } else {
        emailError.innerText = "";
        emailError.style.display = "none";
    }

    if (isError) {
        setTimeout(() => {
            nameError.style.display = "none";
            emailError.style.display = "none";
        }, 3000);
        return;
    }

    let userData = {
        name: name,
        email: email,
    };
    console.log("Form submitted");
    console.log(userData);

    // create an Table if user click on submit button
    let table = document.getElementById("dataTable");
    if (!table) {
        table = document.createElement("table");
        table.id = "dataTable";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        document.body.appendChild(table);
    }
    // append submitted data to table
    const tbody = document.querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${userData.name}</td>
        <td>${userData.email}</td>
        <td>
            <button class="update-btn">
                <span class="material-icons">edit</span>
            </button>
            <button class="delete-btn">
                <span class="material-icons">delete</span>
            </button>
        </td>
    `;
    tbody.appendChild(row);

    // Add event listeners for update and delete buttons
    row.querySelector(".update-btn").addEventListener("click", () => updateRow(row));
    row.querySelector(".delete-btn").addEventListener("click", () => deleteRow(row));

    document.getElementById("myForm").reset();
};

const updateRow = (row) => {
    let name = row.querySelector("td").innerText;
    let email = row.querySelector("td:nth-child(2)").innerText;

    document.getElementById("name").value = name;
    document.getElementById("email").value = email;

    row.remove();
};

const deleteRow = (row) => {
    row.remove();
};

document.getElementById("myForm").addEventListener("submit", submitHandler);
