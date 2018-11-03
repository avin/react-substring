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

## API

#### Props

| Property   | Type             | Required? | Description                 |
| :--------- | :--------------- | :-------: | :-------------------------- |
| substrings | Array<Substring> |     ✓     | Array on Substring objects. |

#### Substring object fields

| Field name    | Type                      | Required? | Description                                                                                        |
| :------------ | :------------------------ | :-------: | :------------------------------------------------------------------------------------------------- |
| match         | RegExp or String          |     ✓     | Substring pattern to replace.                                                                      |
| component     | React.Component or String |     ✓     | React component or tag name taking matching content.                                               |
| caseSensitive | Bool                      |           | If use match as string - it allows to switch on case sensitive search substring (Default: `false`) |
| props         | Object                    |           | Additional props for matching component (can use `style`, `className` or something else)           |

## License

MIT © [avin](https://github.com/avin)
