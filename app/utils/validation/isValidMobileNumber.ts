export function isValidMobileNumberSubString(text: string): boolean {
  return /^\d{0,9}$/.test(text);
}

export function isValidMobileNumber(text: string): boolean {
  return /^\d{9}$/.test(text);
}
