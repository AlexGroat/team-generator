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
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the managers ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?'
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        // adding manager to the team members array
        memberArray.push(manager);
        console.log(manager);
    })
}