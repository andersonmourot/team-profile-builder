const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, employee_id, email, officeNumber) {
        super(name, employee_id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;