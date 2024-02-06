// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  //Add
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  //Subtract  
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 1490, b: 48, action: Action.Subtract, expected: 1442 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  //Divide
  { a: 7, b: 13, action: Action.Divide, expected: 0.53846153846 },
  { a: 36, b: 12, action: Action.Divide, expected: 3 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  // Multiply
  { a: 7, b: 13, action: Action.Multiply, expected: 91 },
  { a: 36, b: 12, action: Action.Multiply, expected: 432 },
  { a: 10, b: -5, action: Action.Multiply, expected: -50 },
  //Exponentiate
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 10, b: -5, action: Action.Exponentiate, expected: 0.00001 },
  //Other 
  { a: 2, b: 3, action: "Test", expected: null },
  { a: "n", b: 0, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  describe.each(testCases)(`with $action action`, ({ a, b, action, expected }) => {
    it(`should correctly ${action} $a and $b`, () => {
      const rawInput = { a, b, action };
      const result = simpleCalculator(rawInput);
      if (action === Action.Divide || action === Action.Exponentiate) {
        expect(result).toBeCloseTo(expected as number, 10);
      } else {
        expect(result).toBe(expected);
      }
    });
  });
});
