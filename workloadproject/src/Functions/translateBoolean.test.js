//imports
import { shallow } from 'enzyme';
import TranslateBoolean from './translateBoolean';

//tests
test('Passing in number returns null', () => {
    const invalidArg = '1';

    expect(TranslateBoolean(invalidArg)).toBeNull();
});

test('Passing in string returns null', () => {
    const invalidArg = 'testasdf';

    expect(TranslateBoolean(invalidArg)).toBeNull();
});

test('Passing in special character returns null', () => {
    const invalidArg = '{';

    expect(TranslateBoolean(invalidArg)).toBeNull();
});

test('Passing in object returns null', () => {
    const invalidArg = {};

    expect(TranslateBoolean(invalidArg)).toBeNull();
});

test('Passing in null returns null', () => {
    const invalidArg = null;

    expect(TranslateBoolean(invalidArg)).toBeNull();
});

test('Passing in undefined returns null', () => {
    const invalidArg = undefined;

    expect(TranslateBoolean(invalidArg)).toBeNull();
});

test('Passing in false returns "No"', () => {
    const validArg = false;

    expect(TranslateBoolean(validArg)).toBe('No');
});

test('Passing in true returns "Yes"', () => {
    const validArg = true;

    expect(TranslateBoolean(validArg)).toBe('Yes');
});