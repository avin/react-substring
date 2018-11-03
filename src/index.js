import React from 'react';
import escapeRegExp from 'lodash.escaperegexp';
import PropTypes from 'prop-types';

export default class Substring extends React.PureComponent {
    static propTypes = {
        /**  Main content as string */
        children: PropTypes.string,

        /**  Array on Substring objects */
        substrings: PropTypes.arrayOf(
            PropTypes.shape({
                /** Pattern to search substrings for processing */
                match: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string]).isRequired,

                /** React component or tag name taking matching content. (Default tag `mark`) */
                component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

                /** If use match as string - it allows to switch on case sensitive search substring (Default: `false`) */
                caseSensitive: PropTypes.bool,

                /** Additional props for matching component (can use `style`, `className` or something else) */
                props: PropTypes.object,
            }),
        ).isRequired,
    };

    render() {
        const { children: content, substrings } = this.props;

        let contentParts = [content];

        let key = 0;
        substrings.forEach(({ match, component: Component, caseSensitive, props }) => {
            props = props || {};
            Component = Component || 'mark';

            if (!Array.isArray(match)) {
                match = [match];
            }

            match.forEach(matchItem => {
                let midResult = [];
                contentParts.forEach(contentPart => {
                    //Work only with string - another ones are React elements
                    if (typeof contentPart === 'string') {
                        if (typeof matchItem === 'string') {
                            let modificators = 'g';
                            if (caseSensitive !== true) {
                                modificators += 'i';
                            }
                            matchItem = new RegExp(escapeRegExp(matchItem), modificators);
                        }

                        let matchResult;
                        let startIndex = 0;
                        let lastIndex = 0;
                        while ((matchResult = matchItem.exec(contentPart))) {
                            const from = matchResult.index;
                            const to = matchItem.lastIndex;

                            const beforeString = contentPart.slice(startIndex, from);
                            if (beforeString) {
                                midResult.push(beforeString);
                            }
                            const matchSubstring = contentPart.slice(from, to);
                            startIndex = to;
                            lastIndex = to;

                            midResult.push(
                                <Component key={key++} {...props}>
                                    {matchSubstring}
                                </Component>,
                            );
                        }
                        const afterString = contentPart.slice(lastIndex);
                        if (afterString) {
                            midResult.push(afterString);
                        }
                    } else {
                        midResult.push(contentPart);
                    }
                });
                contentParts = midResult;
            });
        });

        return <span>{contentParts}</span>;
    }
}
