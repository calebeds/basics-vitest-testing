import {it, expect, describe } from 'vitest';
import {validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
    it('should throw an error if an empty string is provided', () => {
        //Arrange
        const input = '';
    
        //Act
        const validationFn = () => { validateStringNotEmpty(input); }
    
        //Assert
        expect(validationFn).toThrow(/Invalid input - must not be empty./);
    });
    
    it('should not throw an error if a non-empty string is provided', () => {
        //Arrange
        const input = 'valid';
    
        //Act
        const result = () => { validateStringNotEmpty(input); }
    
        //Assert
        expect(result).not.toThrow(/Invalid input - must not be empty./);
    });
    
    it('should throw an error if a long string of blanks is provided', () => {
        //Arrange
        const input = '   ';
        
        //Act 
        const validationFn = () => { validateStringNotEmpty(input);}
    
        //Assert
        expect(validationFn).toThrow(/Invalid input - must not be empty./);
    });
    
    it('should throw an error if a any other value than a string is provided', () => {
        //Arrange
        const inputNum = 1;
        const inputBool = true;
        const inputObj = {};
    
        const validationFnNum = () => { validateStringNotEmpty(inputNum); };
        const validationFnBool= () => { validateStringNotEmpty(inputBool); };
        const validationFnObj = () => { validateStringNotEmpty(inputObj); };
    
        expect(validationFnNum).toThrow(/value.trim is not a function/);
        expect(validationFnBool).toThrow(/value.trim is not a function/);
        expect(validationFnObj).toThrow(/value.trim is not a function/);
    
    });
});

describe('validateNumber()', () => {
    it('should throw an error if NaN is provided', () => {
        //Arrange
        const input = NaN;
    
        //Act
        const result = () => { validateNumber(input) };
    
        //Assert
        expect(result).toThrow(/Invalid number input./);
    });
    
    it('should throw an error if a non-numeric value is provided', () => {
        //Arrange
        const input = '1';
    
        //Act
        const validationFn = () => { validateNumber(input); }
    
        //Assert
        expect(validationFn).toThrow();
    });
    
    it('should not throw an error if input is a valid number', () => {
        //Arrange
        const input = 0;
    
        //Act
        const result = () => { validateNumber(input) };
    
        //Assert
        expect(result).not.toThrow(/Invalid number input./);
    });
});
