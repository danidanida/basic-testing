// Uncomment the code below and write your tests
import * as index from './index';

jest.mock('./index', () => {
  const originalModule = jest.requireActual('./index');

  return {
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    index.mockOne();
    index.mockTwo();
    index.mockThree();

    expect(index.mockOne).toHaveBeenCalledTimes(1);
    expect(index.mockTwo).toHaveBeenCalledTimes(1);
    expect(index.mockThree).toHaveBeenCalledTimes(1);
  });

  test('unmockedFunction should log into console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    index.unmockedFunction();

    expect(consoleSpy).toHaveBeenCalledWith('I am not mocked');

    consoleSpy.mockRestore();
  });
});
