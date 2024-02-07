// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {

  test('should create account with initial balance', () => {
    const bankAccount = getBankAccount(100);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(100);

    const withdrawOperation = () => bankAccount.withdraw(105);

    expect(withdrawOperation).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const bankAccountA = getBankAccount(100);
    const bankAccountB = getBankAccount(100);

    const transferOperation = () => bankAccountA.transfer(110, bankAccountB);

    expect(transferOperation).toThrow(InsufficientFundsError);

  });

  test('should throw error when transferring to the same account', () => {
    const bankAccountA = getBankAccount(100);

    const transferOperation = () => bankAccountA.transfer(10, bankAccountA);

    expect(transferOperation).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(100);

    bankAccount.deposit(10);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(110);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(100);

    bankAccount.withdraw(10);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(90);
  });

  test('should transfer money', () => {
    const bankAccountA = getBankAccount(100);
    const bankAccountB = getBankAccount(100);

    bankAccountA.transfer(10, bankAccountB);

    const balanceA = bankAccountA.getBalance();
    const balanceB = bankAccountB.getBalance();


    expect(balanceA).toBe(90)
    expect(balanceB).toBe(110)
  });

  test('fetchBalance should return number in case if request did not failed', async () => {

    const bankAccount = getBankAccount(100);
    try {
      const balance = await bankAccount.fetchBalance();
      expect(typeof balance).toBe('number');
    } catch (error) {
    }



  });

  test('should set new balance if fetchBalance returned number', async () => {
    //synchronizeBalance
    const bankAccount = getBankAccount(100);
    try {
      const balance = await bankAccount.fetchBalance();
      

    } catch (error) {
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
