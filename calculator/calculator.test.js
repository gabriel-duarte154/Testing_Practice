const calculator = require('./calculator');

test('Sum to numbers', () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test('divide two numbers', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
