import { describe, expect, it } from '@jest/globals';
import {
  isValidMobileNumber,
  isValidMobileNumberSubString,
} from '../isValidMobileNumber';

describe('Validate mobile number', () => {
  it('should return true if mobile number has 9 digits', () => {
    const mobileNumber = '123456789';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(true);
  });

  it('should return false if mobile number has less than 9 digits', () => {
    const mobileNumber = '12345678';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has more than 9 digits', () => {
    const mobileNumber = '1234567890';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has letters', () => {
    const mobileNumber = '12345678a';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has special characters', () => {
    const mobileNumber = '12345678@';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has spaces', () => {
    const mobileNumber = '1234567 8';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number is empty', () => {
    const mobileNumber = '';
    const isValid = isValidMobileNumber(mobileNumber);
    expect(isValid).toBe(false);
  });
});

describe('Validate mobile number substring', () => {
  it('should return true if mobile number has 9 digits', () => {
    const mobileNumber = '123456789';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(true);
  });

  it('should return true if mobile number has less than 9 digits', () => {
    const mobileNumber = '12345678';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(true);
  });

  it('should return false if mobile number has more than 9 digits', () => {
    const mobileNumber = '1234567890';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has letters', () => {
    const mobileNumber = '12345678a';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has special characters', () => {
    const mobileNumber = '12345678@';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return false if mobile number has spaces', () => {
    const mobileNumber = '1234567 8';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(false);
  });

  it('should return true if mobile number is empty', () => {
    const mobileNumber = '';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(true);
  });

  it('should return false if mobile number starts with whitespace', () => {
    const mobileNumber = ' ';
    const isValid = isValidMobileNumberSubString(mobileNumber);
    expect(isValid).toBe(false);
  });
});
