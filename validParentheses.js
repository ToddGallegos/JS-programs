//TESTS WHETHER STRING OF PARENTHESIS ARE IN A VALID ORDER OR NOT. RETURNS BOOLEAN. I USED RECURSION.
//REFACTORED CODE:

function smaller(str) {
  while (str.includes('()')) {
    str = str.split('()').join('')
    str = smaller(str)
  }
  return str
  }

let validParentheses = parens => !smaller(parens)


// function smaller(str) {
//   let newStr = str
//   while (newStr.includes('()')) {
//     newStr = newStr.split('()').join('')
//     newStr = smaller(newStr)
//   }
//   return newStr
//   }

// function validParentheses(parens) {
//   let result = smaller(parens)
//   if (result) {
//     return false
//   } else {
//     return true
//   }
// }

console.log(validParentheses(""), "true")
console.log(validParentheses("()"), "true")
console.log(validParentheses("(())"), "true")
console.log(validParentheses(")"), "false")
console.log(validParentheses(")("), "false")
console.log(validParentheses("()()"), "true")
console.log(validParentheses("(())((()())())"), "true")
// let test = '()'
// test = test.split('()').join('')
// console.log(typeof test)