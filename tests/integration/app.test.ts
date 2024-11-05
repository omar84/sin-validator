import { fireEvent, waitFor } from '@testing-library/dom';
import {
  getDomElements,
  initSinValidator,
  MESSAGE_DEFAULT,
  MESSAGE_DEFAULT_COLOR,
  MESSAGE_INVALID,
  MESSAGE_INVALID_COLOR,
  MESSAGE_VALID,
  MESSAGE_VALID_COLOR,
  showDefaultMessage,
  showValidationMessage,
} from '../../src/dom-helper';

let elements: ReturnType<typeof getDomElements>;

beforeEach(() => {
  document.body.innerHTML = `
      <input id="sin-input" type="text">
      <p id="validation-message"></p>
    `;
  initSinValidator();
  elements = getDomElements();
});

describe('Showing messages functionality', () => {
  it('should show a default message when input is empty', () => {
    showDefaultMessage();
    expect(elements.messageEl.textContent).toBe(MESSAGE_DEFAULT);
    expect(elements.messageEl.style.color).toBe(MESSAGE_DEFAULT_COLOR);
  });

  it('should validate a correct SIN', () => {
    showValidationMessage(true);
    expect(elements.messageEl.textContent).toBe(MESSAGE_VALID);
    expect(elements.messageEl.style.color).toBe(MESSAGE_VALID_COLOR);
  });

  it('should validate an incorrect SIN', () => {
    showValidationMessage(false);
    expect(elements.messageEl.textContent).toBe(MESSAGE_INVALID);
    expect(elements.messageEl.style.color).toBe(MESSAGE_INVALID_COLOR);
  });
});

describe('Input box functionality', () => {
  it('should show the default message when input is empty', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_DEFAULT);
    });
  });

  it('should show the default message when input is less than 9 digits', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '12345678' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_DEFAULT);
    });
  });

  it('should show the default message when input is more than 9 digits', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '1234567890' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_DEFAULT);
    });
  });

  it('should show an error message for non-numeric characters', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '04645428A' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_DEFAULT);
    });
  });

  it('should show an error message for invalid SIN', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '123456789' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_INVALID);
    });
  });

  it('should show a success message for valid SIN', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '046454286' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_VALID);
    });
  });

  it('should show a success message for hyphinated valid SIN', async () => {
    fireEvent.input(elements.sinInput, { target: { value: '046-454-286' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_VALID);
    });
  });

  it('should show a success message for valid SIN with spaces', async () => {
    fireEvent.input(elements.sinInput, { target: { value: ' 046 454 286 ' } });
    await waitFor(() => {
      expect(elements.messageEl.textContent).toBe(MESSAGE_VALID);
    });
  });
});
