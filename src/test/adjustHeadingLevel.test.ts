import { suite, test } from 'mocha';
import * as assert from 'assert';
import { adjustHeadingLevel } from '../utils';

suite('adjustHeadingLevel tests', () => {
    test('Increase heading level', () => {
        const currentLevel = 2;
        const expectedResult = 3;
        const result = adjustHeadingLevel('increase', currentLevel);
        assert.strictEqual(result, expectedResult);
    });

    test('Decrease heading level', () => {
        const currentLevel = 3;
        const expectedResult = 2;
        const result = adjustHeadingLevel('decrease', currentLevel);
        assert.strictEqual(result, expectedResult);
    });

    test('Set heading level', () => {
        const targetLevel = 4;
        const expectedResult = 4;
        const result = adjustHeadingLevel('set', targetLevel);
        assert.strictEqual(result, expectedResult);
    });

    test('Heading level should not go below 1', () => {
        const currentLevel = 1;
        const expectedResult = 1;
        const result = adjustHeadingLevel('decrease', currentLevel);
        assert.strictEqual(result, expectedResult);
    });

    test('Heading level should not go above 6', () => {
        const currentLevel = 6;
        const expectedResult = 6;
        const result = adjustHeadingLevel('increase', currentLevel);
        assert.strictEqual(result, expectedResult);
    });
});