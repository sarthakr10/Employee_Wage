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
let dailyWages = []; // Store daily wages
let dailyWageMap = new Map(); // Store day-wise wages

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workHours = getWorkingHours(empCheck);
    totalEmpHrs += workHours;
    let dailyWage = workHours * WAGE_PER_HOUR;
    
    dailyWages.push(dailyWage);  // Store in array
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store in Map (Day -> Wage)
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Working Days: " + totalWorkingDays + 
            " | Total Hrs: " + totalEmpHrs + 
            " | Emp Wage: ₹" + empWage);
console.log("Daily Wages: ", dailyWages);

// a. Calculate total Wage using reduce method
let totalWage = dailyWages.reduce((total, wage) => total + wage, 0);
console.log("Total Wage using Reduce: ₹" + totalWage);

// b. Show the Day along with Daily Wage using map function
let dailyWageWithDay = dailyWages.map((wage, index) => `Day ${index + 1}: ₹${wage}`);
console.log("Day-wise Wages: ", dailyWageWithDay);

// c. Show Days when Full time wage (₹160) was earned using filter
let fullTimeDays = [...dailyWageMap.entries()]
                    .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
                    .map(([day, wage]) => `Day ${day}`);
console.log("Days with Full Time Wage (₹160): ", fullTimeDays);

// d. Find first occurrence of Full Time Wage (₹160) using find function
let firstFullTimeDay = [...dailyWageMap.entries()]
                        .find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First Full Time Wage was earned on: ", firstFullTimeDay ? `Day ${firstFullTimeDay[0]}` : "Never");

// e. Check if Every Element of Full Time Wage is truly 160 using every function
let allFullTime = dailyWages.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is every day's wage Full Time Wage (₹160)? ", allFullTime);

// f. Check if there is any Part Time Wage (₹80) using some function
let anyPartTime = dailyWages.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part Time Wage (₹80)? ", anyPartTime);

// g. Find the number of days the Employee Worked (excluding absent days)
let workingDays = dailyWages.filter(wage => wage > 0).length;
console.log("Total Days Employee Worked: ", workingDays);