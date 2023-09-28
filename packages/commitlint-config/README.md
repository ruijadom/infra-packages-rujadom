# @ruijadom/commitlint-config

[![npm version](https://img.shields.io/npm/v/@ruijadom/commitlint-config?style=flat-square&color=8257E5&labelColor=121214)](https://www.npmjs.com/package/@ruijadom/commitlint-config)
[![License](https://img.shields.io/github/license/ruijadom/commitlint-config?style=flat-square&color=8257E5&labelColor=121214)](https://github.com/ruijadom/commitlint-config/blob/main/LICENSE)

`commitlint` configuration for Ruijadom projects.

## Table of Contents

- [@ruijadom/commitlint-config](#ruijadomcommitlint-config)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Using pnpm:](#using-pnpm)
  - [Usage](#usage)
  - [Bonus: Commit Linting with Husky](#bonus-commit-linting-with-husky)
    - [Installation:](#installation-1)
    - [Husky v4:](#husky-v4)
    - [Husky v5:](#husky-v5)
    - [License](#license)

## Installation

You can install `@ruijadom/commitlint-config` using npm or Yarn.

### Using pnpm:

```sh
# pnpm
pnpm i -D @ruijadom/commitlint-config @commitlint/cli

# Yarn
yarn add -D @ruijadom/commitlint-config @commitlint/cli
```

## Usage

After installing, apply the configuration to commitlint by creating a .commitlintrc.js file with the following content:

```js
module.exports = {
  extends: ['@ruijadom/commitlint-config']
};
```

## Bonus: Commit Linting with Husky

To lint commits before they are created, you can use Husky and set up the 'commit-msg' hook.

### Installation:

```sh
# pnpm
pnpm i -D husky

# Yarn
yarn add -D husky
```

### Husky v4:

Then, create a .huskyrc file or add the following code to your package.json:


```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

### Husky v5:

Create a .husky/commit-msg file with the following content:

```sh
#!/bin/sh
npx --no-install commitlint --edit $1
# or
# yarn commitlint --edit $1
```

Make sure to make the script executable using chmod +x .husky/commit-msg.

Version Support
- Node.js LTS >= 10.21.0
- Git >= 2.13.2

### License
This project is licensed under the MIT License. See the LICENSE file for details.



