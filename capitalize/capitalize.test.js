const capitalize = require('./capitalize');

test('capitalize fisrt letter', () => {
  const str = capitalize('test');
  expect(str.charAt(0)).toBe('T');
});

test('capitalize only first letter', () => {
  const str = capitalize('tEsT');
  expect(str).toBe('Test');
});

test('capitalize test', () => {
  let strings = {
    initial: ['james', 'rOhaN', 'First'],
    result: ['James', 'Rohan', 'First'],
  };

  for (let i = 0; i < strings.initial.length; i++) {
    expect(capitalize(strings.initial[i])).toBe(strings.result[i]);
  }
});
