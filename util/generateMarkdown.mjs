/* // Creating a function that returns a license badge based on which license is passed in

function createLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }
  
  //Creating a function to generate markdown for README
  function readmeTemplate(data) {
    return `# ${data.title} 
  ${createLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Github Name
  ${data.githubName}
  ## Deployed Application URL
  ${data.githubURL}
  ## Table of Contents
  * [Contributors](#contribution)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing](#tests)
  * [Questions](#questions)
  ${data.usage}
  ## Contributors
  ${data.contribution}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Testing
  ${data.tests}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }
  
  module.exports = readmetemplate; */
  // generateReadme function populating the README.md
// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${data.features}
## Languages & Dependencies
${data.require}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;