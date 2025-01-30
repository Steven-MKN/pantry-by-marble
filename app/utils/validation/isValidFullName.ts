export function isValidFullName(text: string): boolean {
  return /^([a-zA-Z]+) ([a-zA-Z ]+)$/.test(text);
}

export function isValidFullNameSubString(text: string): boolean {
  return /^[a-zA-Z ]*$/.test(text);
}
