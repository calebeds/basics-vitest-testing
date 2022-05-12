import { it, expect } from 'vitest';
import { add } from '../math';

it('should summarize all numbers values in an array', () => {
    //Arrange
    const numbers = [1, 2];
    const expectedResult = numbers
        .reduce (
            (prevValue, curValue) => { return prevValue + curValue },
            0
        );//This techinically can be put here or under the assert part 

    //Act
    const result = add(numbers);

    //Assert
    expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it('should yield a correct if an array of numeric string values is provided', () => {
    const strNumbers = ['1', '2'];

    const result = add(strNumbers);

    const expectedResult = strNumbers
        .reduce (
            (prevValue, curValue) => { return +prevValue + +curValue },
            0
        );
    expect(result).toBe(expectedResult);
})