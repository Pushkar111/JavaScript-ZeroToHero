const LoginUser = {
    id: 1,
    fullName: {
        firstName: "John",
        lastName: "Wick",
    },
    email: "jhonwick@example.com",
    isActive: true   
}

console.log(LoginUser);
console.log(LoginUser.fullName);
console.log(LoginUser.fullName.firstName);
console.log(LoginUser.fullName.lastName);