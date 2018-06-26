const functions = require('./functions');

describe('Jest tests', () => {
  test('User should be Zeeshan Tamboli object', () => {
    expect(functions.userDetails()).toEqual({
      firstName: 'Zeeshan',
      lastName: 'Tamboli'
    });
  });

  test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
  });

  test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy();
  });

  test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
  });

  test('resolves a Mac', async () => {
    await expect(Promise.resolve('Mac')).resolves.toBe('Mac');
    await expect(Promise.resolve('Mac')).resolves.not.toBe('MSI');
  });

  test('rejects a Mac', async () => {
    await expect(Promise.reject(new Error('Mac'))).rejects.toThrow('Mac');
  });
});
