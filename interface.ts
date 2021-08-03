// interface SquareConfig {
//     color?: string;
//     width?: number
// }

// function createSquare(config:SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area:10000}
//     if(config.color)
//     {
//         newSquare.color=config.color
//     }

//     if(config.width)
//     {
//         newSquare.area= config.width * config.width
//     }
//     return newSquare
// }
// let mySquare = createSquare({color:"black", width:100})
// console.log(`mySquare`, mySquare)

interface SquareConfig {
    empFirst?: string;
    empLast?: string;
    empId?: number;
    empAge?: number;
    empSalary?: number;
    empBonus?: boolean;
}

function createSquare(config:SquareConfig): {empFirst: string,empLast: string, empId: number, empAge: number, empSalary: number, empBonus: boolean} {
    let newEmployee = { empFirst: 'Default firstname', empLast: 'Default lastname', empId: 111111, empAge: 0, empSalary: 50000, empBonus: false}
    if(config.empFirst)
    {
        newEmployee.empFirst=config.empFirst
    }
    if(config.empLast)
    {
        newEmployee.empLast=config.empLast
    }
    if(config.empId)
    {
        newEmployee.empId=config.empId
    }
    if(config.empAge)
    {
        newEmployee.empAge=config.empAge
    }
    if(config.empSalary)
    {
        if(config.empBonus){
            newEmployee.empSalary=config.empSalary*2.5
        }else
        {
            newEmployee.empSalary=config.empSalary
        }
    }
    if(config.empBonus){
        newEmployee.empBonus=config.empBonus
    }
    
    return newEmployee
}
let myEmployee = createSquare({empFirst: "Pongsathon", empLast: "Jansuk", empId: 632110346, empAge: 20, empSalary: 20000, empBonus: false})
console.log(`myEmployee`, myEmployee)