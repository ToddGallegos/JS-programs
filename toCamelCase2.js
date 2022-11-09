// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (!str) {
    return str
  }

  let isAlreadyUpper = false
  let newStr = []
  let strCheck = str.split('_')
  str = str.split('-')

  if (str.length > strCheck.length) {
    for (let i = 0; i < str.length; i++) {
      let miniStr = str[i]
      let miniArr = miniStr.split('')
      if (miniArr[0] === miniArr[0].toUpperCase()) {
        isAlreadyUpper = true
      }
      miniArr[0] = miniArr[0].toUpperCase()
      if (i === 0 && isAlreadyUpper === false) {
        miniArr[0] = miniArr[0].toLowerCase()
      }
      newStr.push(miniArr.join(''))
    }
    newStr = newStr.join('')
    return newStr
  } else if (strCheck.length > str.length) {
    for (let i = 0; i < strCheck.length; i++) {
      let miniStr = strCheck[i]
      let miniArr = miniStr.split('')
      if (miniArr[0] === miniArr[0].toUpperCase()) {
        isAlreadyUpper = true
      }
      miniArr[0] = miniArr[0].toUpperCase()
      if (i === 0 && isAlreadyUpper === false) {
        miniArr[0] = miniArr[0].toLowerCase()
      }
      newStr.push(miniArr.join(''))
    }
    newStr = newStr.join('')
    return newStr
  }
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))

// BETTER SOLUTION:
// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }