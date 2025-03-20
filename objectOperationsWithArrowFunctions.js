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
let empDailyRecords = []; // Array to store daily records

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workHours = getWorkingHours(empCheck);
    totalEmpHrs += workHours;
    let dailyWage = workHours * WAGE_PER_HOUR;

    empDailyRecords.push({
        day: totalWorkingDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });
}

// a. Calculate Total Wage & Total Hours using Arrow Functions & Reduce
let totalWage = empDailyRecords.reduce((total, record) => total + record.wageEarned, 0);
let totalHours = empDailyRecords.reduce((total, record) => total + record.hoursWorked, 0);
console.log(`Total Working Days: ${totalWorkingDays} | Total Hours: ${totalHours} | Total Wage: ₹${totalWage}`);

// b. Show Full Working Days using forEach
console.log("Full Working Days:");
empDailyRecords.forEach(record => {
    if (record.hoursWorked === FULL_TIME_HOURS) console.log(`Day ${record.day}`);
});

// c. Show Part Working Days using Map by reducing to String Array
let partWorkingDays = empDailyRecords
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);
console.log("Part Working Days:", partWorkingDays);

// d. Show No Working Days using Map
let noWorkingDays = empDailyRecords
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);
console.log("No Working Days:", noWorkingDays);