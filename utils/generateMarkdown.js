function renderLicenseBadge(License) {
  if (License === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}
  else if (License === 'GPL v2') {
    return '[![License: GNUv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
}
else if (License === 'GPL v3')
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

else if (License === 'Apache-2.0')
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
else ('');
}

function renderLicenseLink(License) {
  if (License === 'Mit') {
    return '[Link](https://opensource.org/licenses/MIT)';
  } else if (License === 'GPL v2') {
    return '[Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (License === 'GPL v3') {
    return '[Link](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (License === 'Apache-2.0')
    return '[Link](https://opensource.org/licenses/Apache-2.0)';
    else ('')
}

function renderLicenseSection(License) {
  if (License === 'Mit') {
    return `##License
    This project is covered under the MIT license.`;
  } else if (License === 'GPL v2') {
    return `##License
    This project is covered under the GNU General Public License v2.0.`;
}  else if (License === 'GPL v3') {
  return `##License
  This project is covered under the GNU General Public License v3.0.`;
} else if (License === 'Apache-2.0') {
  return `##License
  This project is covered under the Apache License 2.0.`;
} else ('')
}

function generateMarkdown(data){
  
  return `
# ${data.title}

## Description

${data.Description}

${renderLicenseBadge(data.license)}

## Table of Contents

[Installation](#Installation)
<br/>
[Usage](#Usage
<br/>
[Credits](#Credits)
<br/>
[License](#License)
<br/>
[How to Contribute](#Contributing)
<br/>
[Test](#Tests)
<br/>
[Questions](#Questions)
<br/>

## Installation

${data.Installation}

## Usage

${data.Usage}

## Credits

${renderLicenseSection(data.License)}
License ${renderLicenseLink(data.License)}

## How to Contribute

${data.Contributing}

## Tests

${data.Tests}

## Questions
My [GitHub](https://github.com/${data.GitHub}) profile

Got questions? Reach out to me via email: [${data.email}](mailto:${data.email})}`;
}
module.exports = generateMarkdown;
