import { describe, expect, it } from '@jest/globals';
import { isValidPassword } from '../isValidPassword';

describe('Validate password', () => {
  it('should return true if password has 8 characters', () => {
    const password = 'Passw0r!';
    const isValid = isValidPassword(password);
    expect(isValid).toBe(true);
  });

  it('should return false if password has less than 8 characters', () => {
    const password = 'Passw0r';
    const isValid = isValidPassword(password);
    expect(isValid).toBe(false);
  });

  it('should return false if password has no uppercase letter', () => {
    const password = 'passw0r!';
    const isValid = isValidPassword(password);
    expect(isValid).toBe(false);
  });

  it('should return false if password has no lowercase letter', () => {
    const password = 'PASSW0R!';
    const isValid = isValidPassword(password);
    expect(isValid).toBe(false);
  });

  it('should return false if password has no number', () => {
    const password = 'Passwor!';
    const isValid = isValidPassword(password);
    expect(isValid).toBe(false);
  });

  it('should return false if password has no special character', () => {
    const password = 'Passw0rd';
    const isValid = isValidPassword(password);
    expect(isValid).toBe(false);
  });
});
