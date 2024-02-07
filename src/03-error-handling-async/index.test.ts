// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const testValue = 'testValue';
    await expect(resolveValue(testValue)).resolves.toBe(testValue);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const testMessage = 'Test error message';
    expect(() => throwError(testMessage)).toThrow(new Error(testMessage));
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow(new Error("Oops!"));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
