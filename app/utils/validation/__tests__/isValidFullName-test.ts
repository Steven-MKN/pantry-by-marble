import { describe, expect, it } from '@jest/globals';
import { isValidFullName, isValidFullNameSubString } from '../isValidFullName';

describe('Validate full name', () => {
  it('should return true if full name is valid', () => {
    const fullName = 'John Doe';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(true);
  });

  it('should return false if full name is empty', () => {
    const fullName = '';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(false);
  });

  it('should return false if full name is less than 2 words', () => {
    const fullName = 'John';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(false);
  });

  it('should return true if full name is more than 2 words', () => {
    const fullName = 'John Doe Smith';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(true);
  });

  it('should return false if full name contains special characters', () => {
    const fullName = 'John Doe!';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(false);
  });

  it('should return false if full name contains numbers', () => {
    const fullName = 'John 123';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(false);
  });

  it('it should return true if full name ends with a space', () => {
    const fullName = 'John Doe ';
    const isValid = isValidFullName(fullName);
    expect(isValid).toBe(true);
  });
});

describe('Validate full name substring', () => {
  it('should return true if full name is valid', () => {
    const fullName = 'John Doe';
    const isValid = isValidFullNameSubString(fullName);
    expect(isValid).toBe(true);
  });

  it('should return true if full name is empty', () => {
    const fullName = '';
    const isValid = isValidFullNameSubString(fullName);
    expect(isValid).toBe(true);
  });

  it('should return false if full name contains special characters', () => {
    const fullName = 'John Doe!';
    const isValid = isValidFullNameSubString(fullName);
    expect(isValid).toBe(false);
  });

  it('should return false if full name contains numbers', () => {
    const fullName = 'John 123';
    const isValid = isValidFullNameSubString(fullName);
    expect(isValid).toBe(false);
  });

  it('it should return true if full name ends with a space', () => {
    const fullName = 'John Doe ';
    const isValid = isValidFullNameSubString(fullName);
    expect(isValid).toBe(true);
  });
});
