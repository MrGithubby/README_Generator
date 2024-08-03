// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const generateMarkdown = require('.generateMarkdown.js');


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
        type: "input",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) =>
            generateMarkdown(data)
        )
}

// Function call to initialize app
init();