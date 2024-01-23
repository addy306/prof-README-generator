 import fs from "fs"
import inquirer from "inquirer";
import generateREADME from "./util/generateMarkdown.mjs";

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
      // Validate user entry to make sure user types an input
      validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      // Validate user entry to make sure user types an input
      validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'githubName',
      // Validate user entry to make sure user types an input
      validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
    {
        type: 'input',
        message: 'What is your Project Repo Name?',
        name: 'githubURL',
        // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
      },
      {
        type: 'input',
        message: 'Please enter a short Description of your project',
        name: 'description',
        // Validate user entry to make sure user types an input
       validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
      },
      {
        type: 'checkbox',
        name: 'builtwith',
        message: 'Select built with Languages/App:',
        choices: [
          ' HTML',
          'CSS',
          'Javascript',
          'node.js',
          'npm',  
        ],
        default: ['npm', 'Javascript'], // Set default selected options if needed
      },
      {
        type: 'list',
        message: 'Choose a license for your application from the list of provided',
        name: 'license',
        choices:['MIT',
            'GNU  v3.0',
            'Apache License 2.0',
            'BSD 3-Clause',
            'N/A'
          ],
        // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: "npm i",
        // Validate user entry to make sure user types an input
       validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
      },
      {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
         // Validate user entry to make sure user types an input
       validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution",
        // Validate user entry to make sure user types an input
       validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
    {
        type: "input",
        message: "What command should be run for testing?",
        name: "tests",
        default: "npm test",
        // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
  ])

  .then((answers) => {
   // Generate the README content
   const readmeContent = generateREADME(answers);

   // Write the README file
   fs.writeFileSync('./generated-readme/README.md', readmeContent, 'utf8');
 
   console.log('README.md generated successfully!');
  //console.log(answers)
}); 

 