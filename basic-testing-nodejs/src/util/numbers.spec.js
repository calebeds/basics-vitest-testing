import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

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
