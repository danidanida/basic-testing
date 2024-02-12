// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should return a node with null value and next for an empty array', () => {
    const result = generateLinkedList([]);
    expect(result).toStrictEqual({ value: null, next: null });
  });

  test('should generate a linked list with a single node', () => {
    const elements = [5];
    const result = generateLinkedList(elements);
    expect(result).toStrictEqual({ value: 5, next: { value: null, next: null } });
  });

  test('should generate a linked list from values', () => {
    const elements = [1, 2, 3];
    const result = generateLinkedList(elements);
    expect(result).toStrictEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: { value: null, next: null }
        }
      }
    });
  });

  test('should correctly handle null values within the array', () => {
    const elements = [null, 2, null];
    const result = generateLinkedList(elements);
    expect(result).toStrictEqual({
      value: null,
      next: {
        value: 2,
        next: {
          value: null,
          next: { value: null, next: null }
        }
      }
    });
  });

  test('should generate linked list from values and match snapshot', () => {
    const elements = [4, 5, 6];
    const result = generateLinkedList(elements);
    expect(result).toMatchSnapshot();
  });
});