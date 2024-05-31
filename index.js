        const inquirer = require("inquirer");
        const generateMarkdown = require('./utils/generateMarkdown.js');
        const fs = require('fs');

const questions = [
    'What is your project title?',
    'Describe your project.',
    'Check what table of contents sections apply.',
    'Type in the steps to install your project.',
    'Type how you use your project.',
    'Select a license.',
    'Enter contribution guidelines.',
    'Type in testing parameters.',
    'Type in your GitHub username.',
    'Type in your email.'
];

function init() { inquirer.prompt([
                {
            type: 'input',
            message: questions[0],
            name: 'Title', },
                {
            type: 'input',
            message: questions[1],
            name: 'Description', },
                {
            type: 'checkbox',
            message: questions[2],
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
            message: questions[3],
            name: 'Installation', },   
                {
            type: 'input',
            message: questions[4],
            name: 'Usage', },   
                {
            type: 'list',
            message: questions[5],
            name: 'License', },   
                {
            type: 'input',
            message: questions[6],
            name: 'Contributing', },   
                {
            type: 'input',
            message: questions[7],
            name: 'Tests', },
                {
            type: 'input',
            message: questions[8],
            name: 'GitHub' },
            {
            type: 'input',
            message: questions[9],
            name: 'Email',
            },
        ]) 
        .then((data) => {
            const README = generateMarkdown.generateMarkdownFn(data);
            const fileName = `${data.title.toLowerCase().split(' ').join('_')}.md`;
    });
         fs.writeFile("filename", README, (err) => err ? console.log(err) : console.log("success! README has been created as", filename));
    }
// Function call to initialize app
init();