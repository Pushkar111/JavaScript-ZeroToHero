const sales = {
    sales: [
        { product: "Laptop", price: 1000 },
        { product: "Mobile", price: 500 },
        { product: "Earphone", price: 100 },
    ],
    discount: 0.1,
    totalSales: function () {
        return this.sales.reduce((a, b) => a + b.price, 0);
    },
};

// if i want to discount
console.log("discount : ", sales.discount);

// if i want to product Laptop
console.log("sales Laptop : ", sales.sales[0]);

console.log("Total Sales : ", sales.totalSales());

// Desctructuring

const {
    sales: [{ product: product1, price: product1Price }, { product: product2, price: product2Price }, { product: product3, price: product3Price }],
    discount: x,
    totalSales : y,
} = sales;
console.log("product1 : ", product1, "product1Price : ", product1Price);
console.log("product2 : ", product2, "product2Price : ", product2Price);
console.log("product3 : ", product3, "product3Price : ", product3Price);
console.log("discount : ", x);
console.log("Total Sales : ", y.call(sales)); // Call directly from object

console.log();

// Destructuring multiple objects

const company = {
    name: "Tech Solutions",
    address: {
        street: "123 Main St",
        city: "Tech City",
        country: "Techland",
    },
    employees: [
        {
            name: "John Doe",
            position: "Developer",
            skills: {
                primary: "JavaScript",
                secondary: "React",
            },
        },
        {
            name: "Jane Smith",
            position: "Designer",
            skills: {
                primary: "Photoshop",
                secondary: "Illustrator",
            },
        },
    ],
};

// Destructuring multilevel JSON
const {
    name: companyName,
    address: { street, city, country },
    employees: [
        {
            name: emp1Name,
            position: emp1Position,
            skills: { primary: emp1PrimarySkill, secondary: emp1SecondarySkill },
        },
        {
            name: emp2Name,
            position: emp2Position,
            skills: { primary: emp2PrimarySkill, secondary: emp2SecondarySkill },
        },
    ],
} = company;

console.log("Company Name: ", companyName);
console.log("Address: ", street, city, country);
console.log("Employee 1: ", emp1Name, emp1Position, emp1PrimarySkill, emp1SecondarySkill);
console.log("Employee 2: ", emp2Name, emp2Position, emp2PrimarySkill, emp2SecondarySkill);
