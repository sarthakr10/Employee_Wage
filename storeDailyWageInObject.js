const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyRecords = []; // Array of objects to store day-wise details

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workHours = getWorkingHours(empCheck);
    totalEmpHrs += workHours;
    let dailyWage = workHours * WAGE_PER_HOUR;

    // Storing in an object and adding to array
    empDailyRecords.push({
        day: totalWorkingDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });
}

// Display stored objects
console.log("Employee Work Records:", empDailyRecords);
