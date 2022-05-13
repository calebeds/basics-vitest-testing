import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberInput of numberValues) {
    if(typeof numberInput !== 'number'){ //An array of string and numbers can be provided
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    } else { 
      numbers.push(numberInput);
    }
  }

  return numbers;
}