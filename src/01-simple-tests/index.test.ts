// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: Action.Add });
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 5, action: Action.Subtract });
    expect(result).toBe(5);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 5, action: Action.Multiply });
    expect(result).toBe(50);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 100, b: 5, action: Action.Divide });
    expect(result).toBe(20);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 10, action: Action.Exponentiate });
    expect(result).toBe(1024);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 10, b: 5, action: "Minus" });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: "a", b: true, action: "Add" });
    expect(result).toBeNull();
  });
});
