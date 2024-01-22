 // Function to generate the README content
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

export default generateREADME;