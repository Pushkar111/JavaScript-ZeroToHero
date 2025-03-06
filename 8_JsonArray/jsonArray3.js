const companies = [
    {
        name: "Apple",
        industry: "Technology",
        headquarters: "Cupertino, California, USA",
        employees: {
            ceo: {
                name: "Tim Cook",
                id: 1001,
                phone: "1234567890",
            },
            totalEmployees: 147000,
        },
    },
    {
        name: "Microsoft",
        industry: "Technology",
        headquarters: "Redmond, Washington, USA",
        employees: {
            ceo: {
                name: "Satya Nadella",
                id: 1002,
                phone: "0987654321",
            },
            totalEmployees: 181000,
        },
    },
    {
        name: "Amazon",
        industry: "E-commerce",
        headquarters: "Seattle, Washington, USA",
        employees: {
            ceo: {
                name: "Andy Jassy",
                id: 1003,
                phone: "1122334455",
            },
            totalEmployees: 1300000,
        },
    },
    {
        name: "Tesla",
        industry: "Automotive",
        headquarters: "Palo Alto, California, USA",
        employees: {
            ceo: {
                name: "Elon Musk",
                id: 1004,
                phone: "2233445566",
            },
            totalEmployees: 127855,
        },
    },
    {
        name: "Google",
        industry: "Technology",
        headquarters: "Mountain View, California, USA",
        employees: {
            ceo: {
                name: "Sundar Pichai",
                id: 1005,
                phone: "3456789012",
            },
            totalEmployees: 156500,
        },
    },
    {
        name: "Facebook",
        industry: "Social Media",
        headquarters: "Menlo Park, California, USA",
        employees: {
            ceo: {
                name: "Mark Zuckerberg",
                id: 1006,
                phone: "4567890123",
            },
            totalEmployees: 58000,
        },
    },
    {
        name: "Coca-Cola",
        industry: "Beverages",
        headquarters: "Atlanta, Georgia, USA",
        employees: {
            ceo: {
                name: "James Quincey",
                id: 1007,
                phone: "5678901234",
            },
            totalEmployees: 86000,
        },
    },
    {
        name: "Johnson",
        industry: "Healthcare",
        headquarters: "New Brunswick, New Jersey, USA",
        employees: {
            ceo: {
                name: "Alex Gorsky",
                id: 1008,
                phone: "6789012345",
            },
            totalEmployees: 134000,
        },
    },
    {
        name: "Samsung",
        industry: "Technology",
        headquarters: "Suwon, South Korea",
        employees: {
            ceo: {
                name: "Jong-Hee Han",
                id: 1009,
                phone: "7890123456",
            },
            totalEmployees: 287439,
        },
    },
];

console.log(companies);




console.log("-------------------------------------------------------------------------------------------");

// Filter and Map
let GoogleEmployees = companies.filter((comp) => comp.name.toLowerCase() === "google").map((comp) => comp.employees);
console.log(GoogleEmployees);




console.log("-------------------------------------------------------------------------------------------");

let USACompanies = companies.filter((comp) => comp.headquarters.toLowerCase().includes("usa"));
console.log(USACompanies);
let USACompanyNames = USACompanies.map((comp) => comp.name);
console.log(USACompanyNames);
