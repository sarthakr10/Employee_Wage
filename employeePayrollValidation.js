class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Converts to Date object

        // Validate Name
        if (!this.isValidName(name)) {
            throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    // Regex Validation for Name (Starts with Capital, Min 3 Chars)
    isValidName = (name) => /^[A-Z][a-zA-Z]{2,}$/.test(name);

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

// Handling Errors using Try-Catch
try {
    let emp1 = new EmployeePayroll(101, "Amit", 50000, "Male", "2023-04-15");
    let emp2 = new EmployeePayroll(102, "priya", 60000, "Female", "2022-06-10"); // Invalid Name (Lowercase 'p')
    let emp3 = new EmployeePayroll(103, "Ra", 55000, "Male", "2024-01-05"); // Invalid Name (Only 2 Characters)

    let employees = [emp1, emp2, emp3];
    employees.forEach(emp => console.log(emp.getDetails()));
} catch (error) {
    console.error("Error:", error.message);
}