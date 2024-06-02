        const inquirer = require("inquirer");
        const generateMarkdown = require('./utils/generateMarkdown.js');
        const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title', },
            {
        type: 'input',
        message: 'Describe your project.',
        name: 'Description', },
            {
        type: 'checkbox',
        message: 'Check what table of contents sections apply.',
        name: 'TableOfContents',
        choices: [
            "Description", 
            "Installation",
            "Usage", 
            "License",
            "Credits", 
            "Contributing", 
            "Tests", 
            "Questions",
        ] },
            {
        type: 'input',
        message:     'Type in the steps to install your project.',
        name: 'Installation', },   
            {
        type: 'input',
        message: 'Type how you use your project.',
        name: 'Usage', },   
            {
        type: 'list',
        message: 'Select a license.',
        name: 'License',
        choices: [
            "MIT",
            "GPL v2",
            "GPL v3",
            "Apache-2.0",
        ] },   
            {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'Contributing', },   
            {
        type: 'input',
        message: 'Type in testing parameters.',
        name: 'Tests', },
            {
        type: 'input',
        message: 'Type in your GitHub username.',
        name: 'GitHub' },
        {
        type: 'input',
        message: 'Type in your email.',
        name: 'Email',
        },
];

function init() { 
    inquirer.prompt(questions)
        .then((data) => {
            const README = generateMarkdown(data);
            const fileName = `${data.Title.toLowerCase().split(' ').join('_')}.md`;
            fs.writeFile(fileName, README, (err) => err ? console.log(err) : console.log("success! README has been created as", fileName));
    });
        
    };
// Function call to initialize app
init();