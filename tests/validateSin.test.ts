import { validateSIN } from '../src/helper'; // Adjust the import path based on your file structure

describe('validateSIN', () => {
  const testCases = [
    { input: '046454286', expected: true, description: 'valid SIN' },
    { input: '123456789', expected: false, description: 'invalid SIN' },
    { input: '12345678', expected: false, description: 'less than 9 digits' },
    { input: '1234567890', expected: false, description: 'more than 9 digits' },
    { input: '04645428A', expected: false, description: 'non-numeric characters' },
  ];

  testCases.forEach(({ input, expected, description }) => {
    it(`should return ${expected} for input ${input} (${description})`, () => {
      expect(validateSIN(input)).toBe(expected);
    });
  });
});
