import React from 'react';
import escapeRegExp from 'lodash.escaperegexp';
import PropTypes from 'prop-types';

export default class Substring extends React.PureComponent {
    static propTypes = {
        children: PropTypes.string,
        substrings: PropTypes.arrayOf(
            PropTypes.shape({
                match: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string]).isRequired,
                component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
                caseSensitive: PropTypes.bool,
                style: PropTypes.object,
                className: PropTypes.string,
            }),
        ),
    };

    render() {
        const { children: content, substrings } = this.props;

        let contentParts = [content];

        let key = 0;
        substrings.forEach(({ match, component: Component, caseSensitive, props }) => {
            props = props || {};

            if (!Array.isArray(match)) {
                match = [match];
            }

            match.forEach(matchItem => {
                let midResult = [];
                contentParts.forEach((contentPart) => {
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
