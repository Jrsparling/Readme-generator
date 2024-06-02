function renderLicenseBadge(License) {
  if (License === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}
  else if (License === 'GPL v2') {
    return '[![License: GNUv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
}
else if (License === 'GPL v3') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}
else if (License === 'Apache-2.0') {
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'}
  else {return''}
}

function renderLicenseLink(License) {
  if (License === 'MIT') {
    return '[Link](https://opensource.org/licenses/MIT)';
  } else if (License === 'GPL v2') {
    return '[Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (License === 'GPL v3') {
    return '[Link](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (License === 'Apache-2.0') {
    return '[Link](https://opensource.org/licenses/Apache-2.0)';}
  else {return''}
}

function renderLicenseSection(License) {
  if (License === 'MIT') {
    return `## License
    This project is covered under the MIT license.`;
  } else if (License === 'GPL v2') {
    return `## License
    This project is covered under the GNU General Public License v2.0.`;
}  else if (License === 'GPL v3') {
  return `## License
  This project is covered under the GNU General Public License v3.0.`;
} else if (License === 'Apache-2.0') {
  return `## License
  This project is covered under the Apache License 2.0.`;
} else {return''}
}

function generateMarkdown(data){
  
  return `
# ${data.Title}

## Description

${data.Description}

${renderLicenseBadge(data.License)}

## Table of Contents

[Installation](#installation)
<br/>
[Usage](#usage)
<br/>
[Credits](#credits)
<br/>
[License](#license)
<br/>
[Contribute](#contribute)
<br/>
[Test](#tests)
<br/>
[Questions](#questions)
<br/>

## Installation

${data.Installation}

## Usage

${data.Usage}

## Credits

${renderLicenseSection(data.License)}
${renderLicenseLink(data.License)}

## Contribute

${data.Contributing}

## Tests

${data.Tests}

## Questions
My [GitHub](https://github.com/${data.GitHub}) profile

Got questions? Reach out to me via email: [${data.Email}](mailto:${data.Email})}`;
}
module.exports = generateMarkdown;
