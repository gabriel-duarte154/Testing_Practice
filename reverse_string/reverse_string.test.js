const reverseString = require('./reverse_string');

test('reverse a simple string', () => {
  expect(reverseString('code')).toBe('edoc');
});

test('reverse a complex stting', () => {
  expect(reverseString('The quick fox jumps over the lazy dog.')).toBe(
    '.god yzal eht revo spmuj xof kciuq ehT'
  );
});

test('covert the string back to the original form', () => {
  expect(reverseString('.god yzal eht revo spmuj xof kciuq ehT')).toBe(
    'The quick fox jumps over the lazy dog.'
  );
});
