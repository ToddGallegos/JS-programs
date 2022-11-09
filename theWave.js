// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase
// letter is a person standing up. 

// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  let waveArr = []
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      str = str.split('');

      str[i] = str[i].toUpperCase();
      if (i > 0) {
        str[i - 1] = str[i - 1].toLowerCase();
      }
      str = str.join('');
      waveArr.push(str)
    }
    if (i>0 && str[i] == ' ') {
      str = str.split('');
      str[i-1] = str[i-1].toLowerCase();
      str = str.join('');
    }
  }
  return waveArr
}

//console.log(wave("two words"))
//console.log(wave('r mfwvaduhhpfh xbxxpcuefcedvcuvwyhzohx vhqspuw rnp yvagaafumbrlldmsnffmzcq kgisj'))

// let prevLet = ''
// for (let i = 0; i < str.length; i++) {
//   if (prevLet != str[i]) {
//     prevLet = str[i];
//     waveArr.push(str.replace(str[i], smallToUpper))

//   } else if (prevLet == str[i]) {
//     let t = 0
//     let toPush = str.replace(/str[i]/g, match => ++t === 2 ? prevLet.toUpperCase() : match)
//     waveArr.push(toPush)
//     console.log(toPush)
//   }
// }
// console.log(waveArr)
//   for (let i=0;i<str.length;i++){
//     let newString = str
//     newString[i] = newString[i].toUpperCase()
//     console.log(newString, newString[i], str[i].toUpperCase())
//     waveArr.push(newString)
//   }
//   console.log(waveArr)


// function smallToUpper(str) {
//   return str.toUpperCase();
// }