/**
 * Validates a SIN (Social Insurance Number) using the Luhn algorithm.
 * @param {string} input - The SIN number as a string of digits.
 * @returns {boolean} - Returns true if the SIN is valid, false otherwise.
 */
export function validateSIN(input: string): boolean {
  // SIN Has to be exactly 9 digits
  if (!/^\d{9}$/.test(input)) return false;

  // Luhn Algorithm
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    let digit = parseInt(input[i], 10);

    // Double every other digit, starting with the second digit
    if (i % 2 === 1) {
      digit *= 2;
      // When the result of doubling the digit is 10 or more, we add the resulting 2 digits
      // Since we only have possible resulting values between 10 and 18 inclusive, we will always add 1 to the first digit, and drop the tens digit
      // So, for example: 16 becomes 16 + 1 - 10, which means we always subtract 9 from any value above 9 and below 19
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  // SIN is valid only if the checksum is divisible by 10 with no remainder
  return sum % 10 === 0;
}
