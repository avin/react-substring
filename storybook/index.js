import React from 'react';
import { storiesOf } from '@storybook/react';
import Substring from '../src';

const UpperCaseString = ({ children }) => <span>{children.toUpperCase()}</span>;
const RedString = ({ children }) => <span style={{ color: 'red' }}>{children}</span>;
const GreenString = ({ children }) => <span style={{ color: 'lightgreen' }}>{children}</span>;

storiesOf('react-substring', module).add('simple-demo', () => {
    return (
        <div className="container">
            <div>
                <span>
                    <Substring
                        substrings={[
                            {
                                match: new RegExp('This', 'gi'),
                                component: 'b',
                            },
                            {
                                match: new RegExp('sample', 'gi'),
                                component: RedString,
                            },
                            {
                                match: new RegExp('show', 'gi'),
                                component: GreenString,
                            },
                            {
                                match: new RegExp('Just', 'g'),
                            },
                            {
                                match: 'string',
                                caseSensitive: true,
                                component: UpperCaseString,
                            },
                        ]}
                    >
                        This is sample [string String stRing]! Just to show you how it works.
                    </Substring>
                </span>
            </div>
        </div>
    );
});
