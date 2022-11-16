const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, employee_id, email, github) {
    super(name, employee_id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
