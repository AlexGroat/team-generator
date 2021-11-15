const Engineer = require('../lib/Engineer');

test("Ability to set GitHub username using constructor function", () => {
    const github = "Bertram-Gilfoyle";
    const employee = new Engineer("Gilfoyle", 2, "BertramGilfoyle@gmail.com", github);
    expect(employee.github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Gilfoyle", 2, "BertramGilfoyle@gmail.com", "Bertram-Gilfoyle");
    expect(employee.getRole()).toBe(role);
  });