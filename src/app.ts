const sinInput = document.getElementById('sin-input') as HTMLInputElement;
const messageEl = document.getElementById('validation-message') as HTMLParagraphElement;

// Extract functionality that deal with dom manipulation to spearate functions

/**
 * Displays a default message for the user.
 * @returns {void}
 */
function showDefaultMessage(): void {
  messageEl.textContent = 'Please enter a 9-digit number.';
  messageEl.style.color = 'gray';
}

/**
 * Displays a validation message indicating whether the SIN is valid or invalid.
 * Aslo, colors the message appropriately.
 * @param {boolean} isValid - Indicates if the SIN is valid (true) or invalid (false).
 * @returns {void}
 */
function showValidationMessage(isValid: boolean): void {
  messageEl.textContent = isValid ? '✅ Valid SIN' : '❌ Invalid SIN';
  messageEl.style.color = isValid ? 'green' : 'red';
  messageEl.style.transition = 'all 0.3s';
}

/**
 * Validates a SIN (Social Insurance Number) using the Luhn algorithm.
 * @param {string} input - The SIN number as a string of digits.
 * @returns {boolean} - Returns true if the SIN is valid, false otherwise.
 */
function validateSIN(input: string): boolean {
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

showDefaultMessage();

/**
 * Event listener for the SIN input element.
 * Triggers on each input event, Sanitizes the input, validates it, then shows the appropriate message to the user.
 */
sinInput.addEventListener('input', function () {
  // Remove all non-digit characters
  // This makes it easier and faster to validate copy-pasted numbers that may contain hyphens or spaces
  this.value = this.value.replace(/\D/g, '');

  const sin = this.value;

  // If the input is not yet 9 digits, lets ask for a valid shape of SIN, no need to run further validations
  if (sin.length !== 9) {
    showDefaultMessage();
    return;
  }

  const isValid: boolean = validateSIN(sin);
  showValidationMessage(isValid);
});
