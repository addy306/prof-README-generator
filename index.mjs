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
        message: 'What is your Deployed GitHub URL?',
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

 /*  // Function to generate the README content
function generateREADME(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
<!-- Add usage information here -->

## License
This project is licensed under the ${answers.license} License - see the [LICENSE](LICENSE) file for details.

## Contributing
<!-- Add contributing guidelines here -->

## Tests
<!-- Add information about how to run tests here -->

## Questions
If you have any questions, feel free to contact me:
- GitHub: [${answers.githubName}](https://github.com/${answers.githubName})
- Email: ${answers.email}
`;
}

function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
 */