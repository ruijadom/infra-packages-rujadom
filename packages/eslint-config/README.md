# @ruijadom/eslint-config

## Whats included?

- [@ruijadom/eslint-config](#ruijadomeslint-config)
  - [Whats included?](#whats-included)
  - [Setup](#setup)
    - [React (with Next.js)](#react-with-nextjs)
    - [React (without Next.js)](#react-without-nextjs)
    - [Node.js](#nodejs)

## Setup

### React (with Next.js)

Install dependencies:

```
npm i -D eslint @ruijadom/eslint-config
```

Inside `.eslintrc.json`

```
{
  "extends": [
    "@ruijadom/eslint-config/next",
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:

```
npm i -D eslint @ruijadom/eslint-config
```

Inside `.eslintrc.json`

```
{
  "extends": "@ruijadom/eslint-config/react"
}
```

### Node.js

Install dependencies:

```
npm i -D eslint @ruijadom/eslint-config
```

Inside `.eslintrc.json`

```
{
  "extends": "@ruijadom/eslint-config/node"
}
```
