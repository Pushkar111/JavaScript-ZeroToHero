// Object.seal() and  Object.freeze() are used to prevent modification of an object.

// Object.seal() prevents adding new properties to an object, but allows existing properties to be modified
// Object.freeze() prevents adding or deleting properties from an object, and also prevents existing properties from being modified

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

Object.seal(user);

// in this case
console.log(user)
delete user.preferences // false

// but for nested json or  array we can still delete or add properties
delete user.preferences.newsletter; // true
console.log(user.preferences)

// we can also change the value of properties
user.name = "Mahesh";
console.log(user.name)