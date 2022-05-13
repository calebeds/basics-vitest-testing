import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        //Arrange
        const strNumber = '2';
        
        //Act
        const result= transformToNumber('2');
    
        //Assert
        // const expectedResult = parseInt(result);
        // expect(result).toBe(expectedResult);
        expect(result).toBeTypeOf('number');
    });
    
    
    it('should transform a string number to a number of type number', () => {
        //Arrange
        const strNumber = '2';
        
        //Act
        const result= transformToNumber('2');
    
        //Assert
        expect(result).toBe(+strNumber);
    });
    
    it('should yield NaN for non-transformable values', () => {
        //Arrange
        const invalid = 'a';
        const invalid2 = {};
    
        //Act 
        const result = transformToNumber(invalid);
        const result2 = transformToNumber(invalid2);
    
    
        //Assert
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    
    });    
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        //Arrange
        const numberValues = ['1', '2'];

        //Act
        const cleanedNumbers =  cleanNumbers(numberValues);

        //Assert
        const expectedResult = numberValues.map(n => +n);//Just transform the string to number

        expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual(expectedResult);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        //Arrange
        const numberValues = ['', 1];

        //Act
        const cleanFn = () => cleanNumbers(numberValues);

        //Assert
        expect(cleanFn).toThrow();
    });

    it('should return an NaN if an empty array is provided', () => {
        //Arrange
        const numberValues = [];

        //Act
        const cleanedNumbers =  cleanNumbers(numberValues);

        //Assert
        expect(cleanedNumbers).not.toBeNaN();
    });

    it('should return an array of numbers if an array with string numbers and numbers per se is provided', () => {
        //Arrange
        const numberValues = ['1', 2];

        //Act
        const cleanedNumbers = cleanNumbers(numberValues);

        //Assert
        expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers[1]).toBeTypeOf('number');
    });
});