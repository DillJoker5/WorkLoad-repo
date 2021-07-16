//imports
import TranslateBoolean from './translateBoolean';

//tests
test('Passing in number returns null', () => {
    const invalidArg = '1';

    expect(TranslateBoolean(invalidArg)).toBeUndefined();;
});

test('Passing in string returns null', () => {
    const invalidArg = 'testasdf';

    expect(TranslateBoolean(invalidArg)).toBeUndefined();
});

test('Passing in special character returns null', () => {
    const invalidArg = '{';

    expect(TranslateBoolean(invalidArg)).toBeUndefined();
});

test('Passing in object returns null', () => {
    const invalidArg = {};

    expect(TranslateBoolean(invalidArg)).toBeUndefined();
});

test('Passing in null returns null', () => {
    const invalidArg = null;

    expect(TranslateBoolean(invalidArg)).toBeUndefined();
});

test('Passing in undefined returns null', () => {
    const invalidArg = undefined;

    expect(TranslateBoolean(invalidArg)).toBeUndefined();
});

test('Passing in false returns "No"', async () => {
    const validArg = false;

    await setTimeout(() => {
        expect(TranslateBoolean(validArg)).toBe('No');
    });
});

test('Passing in true returns "Yes"', async () => {
    const validArg = true;

    await setTimeout(() => {
        expect(TranslateBoolean(validArg)).toBe('Yes');
    });
});