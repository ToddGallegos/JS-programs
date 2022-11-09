// Write class below
class ShiftCipher {
  constructor(num) {
    this.num = num
  }
  encrypt(str) {
    const alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'
    ];
    str = str.toUpperCase()

    let arr = str.split('');
    let NewArr = []

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (arr[i] == alphabet[j]) {
          if ((j + this.num) > 25) {
            NewArr.push(alphabet[(j + this.num) - 26])
          } else {
            NewArr.push(alphabet[j + this.num])
          }
        }
      }
    }
    NewArr = NewArr.join('')
    return NewArr
  }

  decrypt(str) {
    const alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'
    ];
    str = str.toUpperCase()
    let arr = str.split('');
    let NewArr = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (arr[i] == alphabet[j]) {
          if ((j - this.num) < 0) {
            NewArr.push(alphabet[(j - this.num) + 26])
          } else {
            NewArr.push(alphabet[j - this.num])
          }
        }
      }
    }
    NewArr = NewArr.join('')
    NewArr = NewArr.toLowerCase()
    return NewArr

  }
}
