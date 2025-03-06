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


console.log(user)

console.log('newsletter' in user.preferences);
delete user.preferences.newsletter; // true
console.log(user.preferences.newsletter); 
console.log('newsletter' in user.preferences);