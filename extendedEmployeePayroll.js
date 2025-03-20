class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Converts to Date object
    }

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

// Creating Employee Payroll Data
let emp1 = new EmployeePayroll(101, "Amit Sharma", 50000, "Male", "2023-04-15");
let emp2 = new EmployeePayroll(102, "Priya Mehta", 60000, "Female", "2022-06-10");
let emp3 = new EmployeePayroll(103, "Rahul Verma", 55000, "Male", "2024-01-05");

// Storing employees in an array
let employees = [emp1, emp2, emp3];

// Display Employee Details
employees.forEach(emp => console.log(emp.getDetails()));