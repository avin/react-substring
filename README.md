# react-substring

> Replace substrings with components

[![NPM registry](https://img.shields.io/npm/v/react-substring.svg?style=for-the-badge)](https://yarnpkg.com/en/package/react-substring) [![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge)](LICENSE)

## Demo

Here is an [examples page](https://avin.github.io/react-substring)

## Install

```bash
# Yarn
yarn add react-substring

# NPM
npm install --save react-substring
```

## Usage

```js
import React from 'react';
import Substring from 'react-substring';

const RedString = ({ children }) => <span style={{ color: 'red' }}>{children}</span>;

const DemoComponent = () => (
    <Substring
        substrings={[
            {
                match: new RegExp('simple', 'gi'),
                component: 'b',
            },
            {
                match: 'code',
                caseSensitive: true,
                component: RedString,
            },
        ]}
    >
        This is simple code.
    </Substring>
);
```

## License

MIT © [avin](https://github.com/avin)
