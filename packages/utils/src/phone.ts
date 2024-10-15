import { phone } from 'phone';

export function formatUSPhone(input = ''): string {
  const numericInput = input.replace(/\D/g, '');
  const formats = [
    { length: 3, format: /(\d{3})/, replace: '($1)' },
    { length: 6, format: /(\d{3})(\d{3})/, replace: '($1) $2' },
    { length: 10, format: /(\d{3})(\d{3})(\d{4})/, replace: '($1) $2-$3' },
  ];

  for (const { length, format, replace } of formats) {
    if (numericInput.length <= length) {
      return numericInput.replace(format, replace);
    }
  }

  return numericInput.slice(0, 10);
}

export function displayPhoneNumber(phoneNumber: string): string {
  const regexPattern = /^\+?1?(\d{3})(\d{3})(\d{4})$/;
  return phoneNumber.replace(regexPattern, '($1) $2-$3');
}

export function validatePhone(phoneNumber = ''): boolean {
  return phone(phoneNumber, { country: 'USA' }).isValid;
}

export function normalizePhone(phoneNumber = ''): string {
  const result = phone(phoneNumber, { country: 'USA' });
  return result.isValid ? result.phoneNumber : '';
}
