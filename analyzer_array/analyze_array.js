function analyzeArray(arr) {
  if (arr.length === 0) return {};
  return {
    average: Math.floor(
      arr.reduce((prev, current) => prev + current, 0) / arr.length
    ),
    min: arr.reduce((min, current) => (min > current ? (min = current) : min)),
    max: arr.reduce((max, current) => (max < current ? (max = current) : max)),
    length: arr.length,
  };
}

module.exports = analyzeArray;
