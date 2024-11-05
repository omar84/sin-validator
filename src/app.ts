import { showDefaultMessage, sinInput, validateSIN, showValidationMessage } from './helper';

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
