const Manager = require('../lib/Manager')

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Alex', 1, 'a.groat.codes@gmail.com',50);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Alex', 1, 'a.groat.codes@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 