class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}`;
}

// Creating Employee Payroll Data
let emp1 = new EmployeePayroll(101, "Amit Sharma", 50000);
let emp2 = new EmployeePayroll(102, "Priya Mehta", 60000);
let emp3 = new EmployeePayroll(103, "Rahul Verma", 55000);

// Storing employees in an array
let employees = [emp1, emp2, emp3];

// Display Employee Details
employees.forEach(emp => console.log(emp.getDetails()));