// Example user profile object
const userProfile = {
    id: 123,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        // state: 'CA', // This property might be missing
        country: 'USA',
        postalCode: '12345'
    },
    preferences: {
        theme: 'dark',
        notifications: {
            email: true,
            sms: false
        }
    },
    // getFullRecord: function() {
    //     return `${this.name}, ${this.address.city}, ${this.address.country}`;
    // }
};

// Accessing nested properties safely using optional chaining
const userState = userProfile.address?.state;
const emailNotifications = userProfile.preferences?.notifications?.email;
const smsNotifications = userProfile.preferences?.notifications?.sms;

// Output the results
console.log(`User State: ${userState}`); // Output: User State: undefined
console.log(`Email Notifications: ${emailNotifications}`); // Output: Email Notifications: true
console.log(`SMS Notifications: ${smsNotifications}`); // Output: SMS Notifications: false


let p = "postalCode";
console.log(userProfile.address?.[p]);



// console.log(userProfile.getFullRecord); // undefined
// console.log(userProfile.getFullRecord()); // TypeError: userProfile.getFullRecord is not a function

console.log(userProfile.getFullRecord?.()); // undefined