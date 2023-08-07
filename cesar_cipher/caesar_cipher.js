function caesarCipher(str, shift) {
  return str
    .split('')
    .map((letter) => {
      if (letter.match(/[a-zA-Z]/)) {
        return String.fromCharCode(getCode(letter, shift));
      }
      return letter;
    })
    .join('');
}

const getCode = (letter, shift) => {
  const letterCode = letter.charCodeAt();
  const range = getLetterRange(letterCode);
  const code = ((letterCode + shift - range) % 26) + range;
  return code < range ? 26 + code : code;
};

const getLetterRange = (code) => {
  return code >= 97 ? 97 : 65;
};

module.exports = caesarCipher;
