// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How do users install your app?"
    },    
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for your project?"
    },

    {
        type: "input",
        name: "testing",
        message: "What are the testing instructions for your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application.",
        choices: [  "MIT License",
            "Apache License 2.0",
            "GNU General Public License (GPL)",
            "GNU Lesser General Public License (LGPL)",
            "BSD License",
            "Creative Commons License",
            "Mozilla Public License 2.0",
            "Unlicense",
            "Eclipse Public License 2.0"
        ]
    },    
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const readmeResponse = generateMarkdown(data);
            const fileName = `${data.title.toLowerCase().split(' ').join('')}_readme.md`;
            writeToFile(fileName, readmeResponse);
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Function call to initialize app
init();