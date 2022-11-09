//in challenge, MORSE_CODE[str] is a dictionary, for testing, made it a function
function MORSE_CODE(str) {
  return 'A'
}

decodeMorse = function (morseCode) {
  let wordArr = morseCode.split('  ');
  let letters = [];

  for (let i = 0; i < wordArr.length; i++) {
    letters.push(wordArr[i].split(' '))
  };

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      letters[i][j] = MORSE_CODE(letters[i][j])
    }
    letters[i] = letters[i].join()
    letters[i] = letters[i].replace(/,/g, '')
    if (letters.length - i > 1 && letters[i]) {
      letters[i] += ' ';
    }
  };

  letters = letters.join();
  letters = letters.replace(/,/g, '');
  if (letters[letters.length - 1] === ' ') {
    letters = letters.slice(0, -1);
  }
  return letters;
};

