const Engineer = require('../lib/Engineer');

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Gilfoyle", 2, "BertramGilfoyle@gmail.com", "Bertram-Gilfoyle");
    expect(employee.getRole()).toBe(role);
  });

  test("Can get GitHub username via getGithub()", () => {
    const testValue = "Bertram-Gilfoyle";
    const e = new Engineer("Gilfoyle", 2, "BertramGilfoyle@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });