# @ruijadom infra packages

- [@ruijadom infra packages](#ruijadom-infra-packages)
  - [Packages](#packages)
  - [Usage](#usage)
    - [Commitlint](#commitlint)
    - [Eslint](#eslint)
    - [Typescript](#typescript)


## Packages

- `@ruijadom/commitlint-config` - Commitlint configuration
- `@ruijadom/eslint-config` - Eslint configuration
- `@ruijadom/tsconfig` - Typescript configuration

## Usage

### Commitlint

```bash
npm install --save-dev @ruijadom/commitlint-config
```


```sh
# create commitlint.config.js file and extends config
echo "module.exports = {extends: ['@ruijadom/commitlint-config']}" > commitlint.config.js
```

### Eslint

```bash
npm install --save-dev @ruijadom/eslint-config
```

```sh
# create .eslintrc.js file and extends config
echo "module.exports = {extends: ['@ruijadom/eslint-config']}" > commitlint.config.js
```

### Typescript

```bash
npm install --save-dev @ruijadom/tsconfig
```

```json
// tsconfig.json
{
  "extends": "@ruijadom/tsconfig"
}
```
