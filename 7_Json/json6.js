const user = {
    name: "Pushkar",
    age: 28,
    contact: {
        email: "pushkar@example.com",
        phone: "123-456-7890",
    },
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345",
    },
    preferences: {
        newsletter: true,
        notifications: {
            email: true,
            sms: false,
        },
    },
};

/* 
1. using const to declare object @323413 not change after we change properties or values 
-> in const when we redeclare  the variable with same name it will throw an error

2. using let to declare object @849032 change after we change properties or values
-> in let when we redeclare  the variable with same name it will not throw an error
*/

// let username = user.name;
// console.log(username);

// username = "Bob";
// console.log(username);
