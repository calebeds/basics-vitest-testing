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
    //Arrange
    const inputs = ['invalid', 1];

    //Act
    const result = add(inputs);

    //Assert
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
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it('should throw an error if no values is passed into the function', () => {
    
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow(/is not iterable/);
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;
    
    const resultFn = () => {
        add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/);
});