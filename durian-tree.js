class Employee {
    constructor(name, title, salary) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = null,
        this.subordinates = [];
    }

    addSubordinate(subordinate) {
        this.subordinates.push(subordinate);
        subordinate.boss = this;
    }

    get numberOfSubordinates() {
        return this.subordinates.length;
    }

    get numberOfPeopleToCEO() {
        let numberOfPeople = 0;
        let currentEmployee = this;

        while (currentEmployee.boss) {
            currentEmployee = currentEmployee.boss;
            numberOfPeople++;
        }
        return numberOfPeople;
    }

    hasSameBoss(employee) {
        return this.boss === employee.boss;
    }

    employeesThatmakeOver(amount) {
        let employees = [];
        if (this.salary > amount) {
            employees.push(this);
        }

        for (const subordinate of this.subordinates) {
            const subordinatesThatMakeOver = subordinate.employeesThatmakeOver(amount);
            employees = employees.concat(subordinatesThatMakeOver);
        }

        return employees;
    }

    get totalEmployees() {

        let totalEmployees = 0;

        for (let subordinate of this.subordinates) {
            totalEmployees += subordinate.totalEmployees + 1;
        }
        
        return totalEmployees;    
    }

}

const ada      = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone   = new Employee("Simone", "Employee", 60000);
const ali      = new Employee("Ali", "Employee", 60000);
const florida  = new Employee("Florida", "Employee", 60000);
const david    = new Employee("David", "Employee", 60000);
const brian    = new Employee("Brian", "Employee", 60000);
const karla    = new Employee("Karla", "Employee", 60000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

console.log(craig.boss);
console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);

let wealthyEmployees = ada.employeesThatmakeOver(418401);

console.log(wealthyEmployees);

console.log(ada.totalEmployees);
console.log(craig.totalEmployees);
