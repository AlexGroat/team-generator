const Employee = require('../lib/Employee');

test("Set a name using const function", () => {
    const name = "Alex Groat";
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
});

test("Set an ID using const function", () => {
    const id = "1";
    const employee = new Employee("Alex Groat", id, "a.groat.codes@gmail.com");
    expect(employee.id).toEqual(id);
});

test("Passing in getEmail() should return the correct email", () => {
    const email = "a.groat.codes@gmail.com";
    const employee = new Employee("Alex Groat", 1, email);
    expect(employee.getEmail()).toEqual(email);    
});

test("Passing in getRole() should return Employee", () => {
    const role = "Employee";
    const employee = new Employee("Alex Groat", 1, "a.groat.codes@gmail.com");
    expect(employee.getRole()).toEqual(role);
});