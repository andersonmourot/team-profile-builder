const Employee = require("../lib/Employee");

test("Can create a new employee object", () => {
  const employee = new Employee();
  expect(typeof (employee)).toBe("object");
});

test("Can set name in employee object", () => {
  const employee = new Employee("Anderson");
  expect(employee.name).toBe("Anderson");
});

test("Can set employee_id in employee object", () => {
  const employee = new Employee("Anderson");
  expect(employee.name).toBe("Anderson");
});

test("Can set email in employee object", () => {
  const employee = new Employee("Anderson", 13, "anderson@gmail.com");
  expect(employee.email).toBe("anderson@gmail.com");
});

test("Can get name from getName() method", () => {
  const employee = new Employee("Anderson", 13, "anderson@gmail.com");
  expect(employee.getName()).toBe("Anderson");
});

test("Can get ID from getId() method", () => {
  const employee = new Employee("Anderson", 13, "anderson@gmail.com");
  expect(employee.getId()).toBe(13);
});

test("Can get email from getEmail() method", () => {
  const employee = new Employee("Anderson", 13, "anderson@gmail.com");
  expect(employee.getEmail()).toBe("anderson@gmail.com");
});

test("Can get role from getRole() method", () => {
  const employee = new Employee("Anderson", 13, "anderson@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});
