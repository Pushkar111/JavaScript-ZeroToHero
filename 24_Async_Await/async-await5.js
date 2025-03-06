const getAllUsers = async () => {
    const url = "https://node5.onrender.com/user/user";
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    console.log("user.msg: ", users.message);
    console.log("users.data: ", users.data);
};

// getAllUsers();


const deleteUser = async() => {
    const url = "https://node5.onrender.com/user/673caf9f052972b5542fdc55";
    const response = await fetch(url, {
        method: "DELETE",
    });
    console.log(response)
}

deleteUser();