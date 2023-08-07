function capitalize(str) {
  let firstLetter = str.substring(0, 1);
  let rest = str.substring(1);
  return firstLetter.toUpperCase() + rest.toLowerCase();
}

module.exports = capitalize;
