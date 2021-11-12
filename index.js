// Link to create HTML
const htmlGen = require('./src/genHTML.js')

// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

// import lib js files

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array for members of the team

const memberArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team managers name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the managers ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the managers office number?"
        },
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            // adding manager to the team members array
            memberArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`\n
    New Employee on the team`);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the role of the employee?",
            choices: ['Engineer, Intern']
        },
        {
            type: 'list',
            name: 'name ',
            message: 'What is the employees name?'
        },
        {
            type: 'list',
            name: 'id',
            message: "What is employee's id?"
        },
        {
            type: 'list',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'list',
            name: 'github',
            message: "Please enter the employee's Github."
        },
        {
            type: 'list',
            name: 'school',
            message: "Please enter the intern's school."
        },
        {
            type: 'confirm',
            name: 'confirmNewMember',
            message: "Would you like to add more team members?",
            default: false
        },
    ])
    .then(employeeData => {

        let {name, id, email, role, github, school, confirmNewMember } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        memberArray.push(employee);

        if(confirmNewMember) {
            return confirmNewMember(memberArray);
        } else {
            return memberArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/team.html', data, err => {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team page has been created successfully!")
        }
    })
};

addManager()
.then(addEmployee)
.then(memberArray => {
    return htmlGen(memberArray);
}).then(renderHTML => {
    return writeFile(renderHTML);
})
.catch(err => {
    console.log(err);
});