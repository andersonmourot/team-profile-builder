const Manager = require("../lib/Manager");

test("Can get role from getRole() method", () => {
  const manager = new Manager("Anderson", 13, "anderson@gmail.com, amourot");
  expect(manager.getRole()).toBe("Manager");
});

test("Can get office number from the getOfficeNumber method", () => {
  const manager = new Manager("Anderson", 13, "anderson@gmail.com", 1);
  expect(manager.getOfficeNumber()).toBe(1);
});