import React from 'react';
import escapeRegExp from 'lodash.escaperegexp';
import PropTypes from 'prop-types';

export default class Substring extends React.Component {
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
                contentParts.forEach((contentPart, idx) => {
                    //Обрабатываем только строки - остальные части это реакторвские объекты
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
                                midResult = [...midResult, beforeString];
                            }
                            const matchSubstring = contentPart.slice(from, to);
                            startIndex = to;
                            lastIndex = to;

                            midResult = [
                                ...midResult,
                                <Component key={key++} {...props}>
                                    {matchSubstring}
                                </Component>,
                            ];
                        }
                        const afterString = contentPart.slice(lastIndex);
                        if (afterString) {
                            midResult = [...midResult, afterString];
                        }
                    } else {
                        midResult = [...midResult, contentPart];
                    }
                });
                contentParts = midResult;
            });
        });

        return <span>{contentParts}</span>;
    }
}
