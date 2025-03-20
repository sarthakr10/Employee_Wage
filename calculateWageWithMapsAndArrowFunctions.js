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
let dailyWageMap = new Map(); // Store Day → Wage
let dailyHourMap = new Map(); // Store Day → Hours

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workHours = getWorkingHours(empCheck);
    totalEmpHrs += workHours;
    let dailyWage = workHours * WAGE_PER_HOUR;
    
    dailyWageMap.set(totalWorkingDays, dailyWage);
    dailyHourMap.set(totalWorkingDays, workHours);
}

// a. Calculate Total Wage & Total Hours using Arrow Function & Reduce
let totalWage = [...dailyWageMap.values()].reduce((total, wage) => total + wage, 0);
let totalHours = [...dailyHourMap.values()].reduce((total, hours) => total + hours, 0);
console.log(`Total Working Days: ${totalWorkingDays} | Total Hours: ${totalHours} | Total Wage: ₹${totalWage}`);

// b. Categorize Full Working Days, Part Working Days, and No Working Days
let fullWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === FULL_TIME_HOURS)
    .map(([day, hours]) => `Day ${day}`);

let partWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === PART_TIME_HOURS)
    .map(([day, hours]) => `Day ${day}`);

let noWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === 0)
    .map(([day, hours]) => `Day ${day}`);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);
