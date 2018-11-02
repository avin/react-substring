// @flow

import React from 'react';
import escapeRegExp from 'lodash.escaperegexp';

type SubstringObject = {
    match: string | RegExp,
    component: React.Component,
    caseSensitive?: boolean,
};

type Props = {
    /** Content string to search substrings.*/
    children: string,
    substrings: Array<SubstringObject>,
};

export default class Substring extends React.Component<Props> {
    render() {
        const { children: content, substrings } = this.props;

        let contentParts = [content];

        let key = 0;
        substrings.forEach(({ match, component: Component, caseSensitive }) => {
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

                            midResult = [...midResult, <Component key={key++}>{matchSubstring}</Component>];
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

        console.log(contentParts);

        return <span>{contentParts}</span>;
    }
}
