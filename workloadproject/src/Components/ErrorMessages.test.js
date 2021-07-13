//imports
import getErrorMessage from './ErrorMessages';

//tests
test('pass in invalid string returns null', () => {
    const invalidArg = 'testasdf';

    expect(getErrorMessage(invalidArg)).toBeUndefined();
});

test('pass in number returns null', () => {
    const invalidArg = '1';

    expect(getErrorMessage(invalidArg)).toBeUndefined();
});

test('pass in object returns null', () => {
    const invalidArg = {};

    expect(getErrorMessage(invalidArg)).toBeUndefined();
});

test('pass in null returns null', () => {
    const invalidArg = null;

    expect(getErrorMessage(invalidArg)).toBeUndefined();
});

test('pass in undefined returns null', () => {
    const invalidArg = undefined;

    expect(getErrorMessage(invalidArg)).toBeUndefined();
});

test('pass in special character returns null', () => {
    const invalidArg = '{';

    expect(getErrorMessage(invalidArg)).toBeUndefined();
});

test('pass in boolean returns null', () => {
    const invalidArg1 = true;
    const invalidArg2 = false;

    expect(getErrorMessage(invalidArg1)).toBeUndefined();
    expect(getErrorMessage(invalidArg2)).toBeUndefined();
});

test('pass in valid string returns desired error message', () => {
    const validArg = 'emptyTable';

    expect(getErrorMessage(validArg)).toBe('Table is empty. Please add some items to the WorkLoad List we know you have stuff to do!');
});