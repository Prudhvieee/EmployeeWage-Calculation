// UC2 Added full time and part time employee wage
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HRS;
        break;
    default:
        empHrs = 0;
        break;
}
let empWage = empHrs * WAGE_PER_HR;
console.log("Emp wage:" + empWage);
