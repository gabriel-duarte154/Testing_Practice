const analyzeArray = require('./analyze_array');

test('empty array', () => {
  expect(analyzeArray([])).toEqual({});
});

test('single element', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
})

test('several elements', () => {
  expect(analyzeArray([4, 5, 8, 7, 9, 6, 2, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 8
  })
})