const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

let empDailyWageArr = [];
let empDailyWageMap = new Map();
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// Function to get working hours
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME: return PART_TIME_HOURS;
        case IS_FULL_TIME: return FULL_TIME_HOURS;
        default: return 0;
    }
};

// Loop until max days or max hours condition is met
while (totalWorkingDays < MAX_WORKING_DAYS && totalEmpHrs + FULL_TIME_HOURS <= MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    let dailyWage = empHrs * WAGE_PER_HOUR;
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

// **(a) Calculate total Wage using reduce**
const totalWage = empDailyWageArr.reduce((sum, wage) => sum + wage, 0);
console.log("Total Wage: ₹" + totalWage);

// **(b) Show Day along with Daily Wage using Map helper function**
let dailyWageStrArr = empDailyWageArr.map((wage, index) => `Day ${index + 1} => Wage: ₹${wage}`);
console.log(dailyWageStrArr.join("\n"));

// **(c) Show Days when Full-time wage (₹160) was earned using filter**
let fullTimeDays = [...empDailyWageMap].filter(([day, wage]) => wage === 160).map(([day]) => day);
console.log("Full Time Wage Earned on Days: ", fullTimeDays);

// **(d) Find the first occurrence when Full Time Wage was earned using find**
let firstFullTimeDay = [...empDailyWageMap].find(([day, wage]) => wage === 160);
console.log("First Full Time Wage Earned on Day: ", firstFullTimeDay ? firstFullTimeDay[0] : "None");

// **(e) Check if Every Element of Full Time Wage is truly holding Full time wage using every**
let isAllFullTime = empDailyWageArr.every(wage => wage === 160);
console.log("Is Every Day a Full Time Wage Day? ", isAllFullTime);

// **(f) Check if there is any Part Time Wage using some**
let hasPartTimeWage = empDailyWageArr.some(wage => wage === 80);
console.log("Is There Any Part Time Wage? ", hasPartTimeWage);

// **(g) Find the number of days the Employee Worked**
let workingDays = empDailyWageArr.filter(wage => wage > 0).length;
console.log("Total Number of Days Worked: ", workingDays);