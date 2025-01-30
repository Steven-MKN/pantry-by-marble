import { describe, expect, it } from '@jest/globals';
import { isValidEmail } from '../isValidEmail';

describe('Validate email', () => {
  it('should return true if email is valid', () => {
    const email = 'johndoe@email.com';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(true);
  });

  it('should return false if email is invalid', () => {
    const email = 'johndoe@';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });

  it('should return false if email is empty', () => {
    const email = '';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });

  it('should return false if email has spaces', () => {
    const email = 'johndoe @ email.com';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });

  it('should return true if email has a plus sign', () => {
    const email = 'john+doe@email.com';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(true);
  });

  it('should return true if email has a dot', () => {
    const email = 'john.doe@email.com';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(true);
  });

  it('should return fale if email has more than 1 @ sign', () => {
    const email = 'john@doe@email.com';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });

  it('should return false if email has more than 1 dot', () => {
    const email = 'john.doe.email.com';
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });
});
