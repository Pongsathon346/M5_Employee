"use strict";
// interface SquareConfig {
//     color?: string;
//     width?: number
// }
function createSquare(config) {
    var newEmployee = { empFirst: 'Default firstname', empLast: 'Default lastname', empId: 111111, empAge: 0, empSalary: 50000, empBonus: false };
    if (config.empFirst) {
        newEmployee.empFirst = config.empFirst;
    }
    if (config.empLast) {
        newEmployee.empLast = config.empLast;
    }
    if (config.empId) {
        newEmployee.empId = config.empId;
    }
    if (config.empAge) {
        newEmployee.empAge = config.empAge;
    }
    if (config.empSalary) {
        if (config.empBonus) {
            newEmployee.empSalary = config.empSalary * 2.5;
        }
        else {
            newEmployee.empSalary = config.empSalary;
        }
    }
    if (config.empBonus) {
        newEmployee.empBonus = config.empBonus;
    }
    return newEmployee;
}
var myEmployee = createSquare({ empFirst: "Pongsathon", empLast: "Jansuk", empId: 632110346, empAge: 20, empSalary: 20000, empBonus: false });
console.log("myEmployee", myEmployee);
