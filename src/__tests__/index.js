import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Substring from '../';

Enzyme.configure({ adapter: new Adapter() });

const FooComponent = ({ children }) => <span className="FooComponent">{children}</span>;

test('Allow to use regexp and react components', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: new RegExp('simple', 'gi'),
                    component: FooComponent,
                },
            ]}
        >
            This is simple code.
        </Substring>,
    );

    expect(element.find('.FooComponent').text()).toEqual('simple');
});

test('Allow to use strings', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: 'simple',
                    component: 'b',
                },
            ]}
        >
            This is simple code.
        </Substring>,
    );

    expect(element.find('b').text()).toEqual('simple');
});

test('Allow to use both', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: new RegExp('This', 'gi'),
                    component: 'b',
                },
                {
                    match: 'simple',
                    component: FooComponent,
                },
            ]}
        >
            This is simple code.
        </Substring>,
    );

    expect(element.find('b').text()).toEqual('This');
    expect(element.find('.FooComponent').text()).toEqual('simple');
});

test('Keep another content', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: new RegExp('zzz', 'gi'),
                    component: 'b',
                },
            ]}
        >
            zzzaaa
        </Substring>,
    );

    expect(element.text()).toEqual('zzzaaa');
});

test('Keep another content', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: new RegExp('zzz', 'gi'),
                    component: 'b',
                },
            ]}
        >
            zzzaaa
        </Substring>,
    );

    expect(element.text()).toEqual('zzzaaa');
});

test('Use caseSensitive', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: 'aaa',
                    component: 'b',
                    caseSensitive: false,
                },
            ]}
        >
            AAA aaa
        </Substring>,
    );

    expect(element.find('b')).toHaveLength(2);

    element = mount(
        <Substring
            substrings={[
                {
                    match: 'aaa',
                    component: 'b',
                    caseSensitive: true,
                },
            ]}
        >
            AAA aaa
        </Substring>,
    );

    expect(element.find('b')).toHaveLength(1);
});

test('Pass additional props to matching component', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: 'zzz',
                    component: 'b',
                    props: { className: 'TheClassName', style: { fontSize: '18px' } },
                },
            ]}
        >
            aaazzz
        </Substring>,
    );

    const matchingElement = element.find('b');
    expect(matchingElement.hasClass('TheClassName')).toEqual(true);
    expect(matchingElement.prop('style')).toEqual({ fontSize: '18px' });
});

test('Pass some match values as array', () => {
    let element = mount(
        <Substring
            substrings={[
                {
                    match: ['aaa','zzz'],
                    component: 'b',
                },
            ]}
        >
            aaazzzqqqggg
        </Substring>,
    );

    expect(element.find('b')).toHaveLength(2);
});
