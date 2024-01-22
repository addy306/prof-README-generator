import fs from "fs"
import inquirer from "inquirer";

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
      message: 'What is your GitHub username?',
      name: 'githubName',
      // Validate user entry to make sure user types an input
      validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
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
        // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
    },
  ])
  .then((response) => 
  console.log(response)
  );