const sinInput = document.getElementById('sin-input') as HTMLInputElement;
const messageEl = document.getElementById('validation-message') as HTMLParagraphElement;

function showDefaultMessage() {
  messageEl.textContent = 'Please enter a 9-digit number.';
  messageEl.style.color = 'gray';
}

function validateSIN(input: string): boolean {
  // Has to be exactly 9 digits
  if (!/^\d{9}$/.test(input)) return false;

  // Luhn Algorithm
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    let digit = parseInt(input[i], 10);

    // Every other digit, starting with the second digit
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

showDefaultMessage();

sinInput.addEventListener('input', function () {
  // Remove all non-digit characters
  this.value = this.value.replace(/\D/g, '');

  const sin = this.value;

  if (sin.length !== 9) {
    showDefaultMessage();
    return;
  }

  const isValid: boolean = validateSIN(sin);

  messageEl.textContent = isValid ? '✅ Valid SIN' : '❌ Invalid SIN';
  messageEl.style.color = isValid ? 'green' : 'red';
  messageEl.style.transition = 'all 0.3s';
});
