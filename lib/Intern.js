const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, employee_id, email, school) {
    super(name, employee_id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
