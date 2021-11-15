const Intern = require('../lib/Intern')

test("Ability to set school using constructor function", () => {
    const school = "Harvard";
    const employee = new Intern("Dinesh", 3, "D.Chugtai@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Dinesh", 3, "D.Chugtai@gmail.com", "Dinesh-Chugtai");
    expect(employee.getRole()).toBe(role);
  });