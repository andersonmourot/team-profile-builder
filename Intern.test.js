const Intern = require("../lib/Intern");

test("Can get role from getRole() method", () => {
  const intern = new Intern("Anderson", 13, "anderson@gmail.com", "SMU");
  expect(intern.getRole()).toBe("Intern");
});

test("Can get school from getSchool() method", () => {
  const intern = new Intern("Anderson", 13, "anderson@gmail.com", "SMU");
  expect(intern.getSchool()).toBe("SMU");
});