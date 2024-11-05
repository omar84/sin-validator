import { validateSIN } from './lib';

export const MESSAGE_DEFAULT = 'Please enter a 9-digit number.';
export const MESSAGE_VALID = '✅ Valid SIN';
export const MESSAGE_INVALID = '❌ Invalid SIN';

export const MESSAGE_DEFAULT_COLOR = 'gray';
export const MESSAGE_VALID_COLOR = 'green';
export const MESSAGE_INVALID_COLOR = 'red';

/**
 * Retrieves the input and message elements from the DOM.
 */
export function getDomElements() {
  const sinInput = document.getElementById('sin-input') as HTMLInputElement;
  const messageEl = document.getElementById('validation-message') as HTMLParagraphElement;

  return {
    sinInput,
    messageEl,
  };
}

/**
 * Displays a default message for the user.
 * @returns {void}
 */
export function showDefaultMessage(): void {
  const { messageEl } = getDomElements();
  messageEl.textContent = MESSAGE_DEFAULT;
  messageEl.style.color = MESSAGE_DEFAULT_COLOR;
}

/**
 * Displays a validation message indicating whether the SIN is valid or invalid.
 * Aslo, colors the message appropriately.
 * @param {boolean} isValid - Indicates if the SIN is valid (true) or invalid (false).
 * @returns {void}
 */
export function showValidationMessage(isValid: boolean): void {
  const { messageEl } = getDomElements();
  messageEl.textContent = isValid ? MESSAGE_VALID : MESSAGE_INVALID;
  messageEl.style.color = isValid ? MESSAGE_VALID_COLOR : MESSAGE_INVALID_COLOR;
  messageEl.style.transition = 'all 0.3s';
}

/**
 * Initializes the SIN input validation functionality.
 * @returns {void}
 */
export function initSinValidator(): void {
  const { sinInput } = getDomElements();
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
}
