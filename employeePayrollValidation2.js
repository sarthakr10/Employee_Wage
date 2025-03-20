class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        // Validate ID
        if (!this.isValidId(id)) {
            throw new Error("Invalid Employee ID! It must be a non-zero positive number.");
        }
        this.id = id;

        // Validate Name
        if (!this.isValidName(name)) {
            throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;

        // Validate Salary
        if (!this.isValidSalary(salary)) {
            throw new Error("Invalid Salary! Salary must be a non-zero positive number.");
        }
        this.salary = salary;

        // Validate Gender
        if (!this.isValidGender(gender)) {
            throw new Error("Invalid Gender! Gender must be 'M' or 'F'.");
        }
        this.gender = gender;

        // Validate Start Date
        let date = new Date(startDate);
        if (!this.isValidDate(date)) {
            throw new Error("Invalid Start Date! Date cannot be in the future.");
        }
        this.startDate = date;
    }

    // Regex Validation for Name (Starts with Capital, Min 3 Chars)
    isValidName = (name) => /^[A-Z][a-zA-Z]{2,}$/.test(name);

    // ID and Salary must be a non-zero positive number
    isValidId = (id) => /^[1-9]\d*$/.test(id);
    isValidSalary = (salary) => /^[1-9]\d*$/.test(salary);

    // Gender must be 'M' or 'F'
    isValidGender = (gender) => /^(M|F)$/.test(gender);

    // Start Date must not be a future date
    isValidDate = (date) => date <= new Date();

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

// Handling Errors using Try-Catch
try {
    let emp1 = new EmployeePayroll(101, "Amit", 50000, "M", "2023-04-15");
    let emp2 = new EmployeePayroll(0, "Priya", 60000, "F", "2022-06-10"); // Invalid ID (Zero)
    let emp3 = new EmployeePayroll(103, "Ra", 55000, "M", "2024-01-05"); // Invalid Name (Too Short)
    let emp4 = new EmployeePayroll(104, "Sara", -5000, "F", "2023-05-12"); // Invalid Salary (Negative)
    let emp5 = new EmployeePayroll(105, "Vikas", 70000, "X", "2023-06-01"); // Invalid Gender
    let emp6 = new EmployeePayroll(106, "Neha", 75000, "F", "2026-08-01"); // Invalid Date (Future)

    let employees = [emp1, emp2, emp3, emp4, emp5, emp6];
    employees.forEach(emp => console.log(emp.getDetails()));
} catch (error) {
    console.error("Error:", error.message);
}