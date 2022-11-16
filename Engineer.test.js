const Engineer = require("../lib/Engineer");

test("Can set name in egineer object", () => {
    const engineer = new Engineer("Anderson", 13, "anderson@gmail.com", "amourot");
    expect(engineer.name).toBe("Anderson");
  });

test("Can get role from getRole() method", () => {
  const engineer = new Engineer("Anderson", 13, "anderson@gmail.com", "amourot");
  expect(engineer.getRole()).toBe("Engineer");
});

test("Can get github from getGitHub() method", () => {
  const engineer = new Engineer("Anderson", 13, "anderson@gmail.com", "amourot");
  expect(engineer.github).toBe("amourot");
});