 // Function to generate the README content
 function generateREADME(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}

## Deployed page URL
[${answers.githubURL}](https://addy306.github.io/${answers.githubURL}/)


## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)

<!-- Add installation instructions here -->
## Installation 
${answers.installation}

<!-- Add usage information here -->
## Usage 
${answers.usage}

## Webpage Features
### Screenshots, Videos, GIF

## License
This project is licensed under the ${answers.license} License - see the [LICENSE](LICENSE) file for details.

<!-- Add contributing guidelines here -->
## Contributing
${answers.contribution}

<!-- Add information about how to run tests here -->
## Tests 
${answers.tests}

## Built With
${answers.builtwith}

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

export default generateREADME;