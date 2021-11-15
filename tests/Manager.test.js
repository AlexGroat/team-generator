const Manager = require('../lib/Manager')

test("Ability to set office number using constructor function", () => {
    const officeNumber = "50";
    const employee = new Manager("Alex", 1, "a.groat.codes@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Alex", 1, "a.groat.codes@gmail.com", "AlexGroat");
    expect(employee.getRole()).toBe(role);
  });