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
        type: 'List',
        message: 'Choos a license for your application from the list of provided',
        name: 'license',
        choices:  [
            'MIT',
            'GNU  v3.0',
            'Apache License 2.0',
            'BSD 3-Clause',
            'Mozilla Public  2.0',
            'The Unlicense',
            'ISC',
            'Creative Commons Zero v1.0 Universal',
            'N/A'
          ],
        // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
        // Validate user entry to make sure user types an input
       validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
      },
  ])
  .then((response) => renderHtml(response));