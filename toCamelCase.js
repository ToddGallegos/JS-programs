// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let arr1 = str.split('_')
  let arr2 = str.split('-')
  let newItem = []
  let result
  if (arr1.length <= arr2.length) {
    //console.log(arr2)
    //arr2 = arr2.join('')
    //console.log(arr2)
    arr2 = arr2.join('')
    arr2 = arr2.split('')
    //console.log(arr2)
    for (let i = 0; i < arr2.length; i++) {
      console.log("arr2[0][0] = ", arr2[0][0].toUpperCase())


      arr2[0][0] = arr2[0][0].toUpperCase()


      if (i > 0) {
        arr2[i] = arr2[i].toLowerCase()
      }
      //arr2 = arr2.join('')
      //console.log(arr2)
    }
    return arr2.join('')

    // result = arr2.map(item => {
    //   newItem[0] = item[0].toUpperCase()
    //   item[0] = newItem[0]
    //   return item
    // })
    // return result.join('')

    // for (let i = 0 ; i < arr2.length ; i++) {
    //   newItem = arr2
    //   if (i < 1) {
    //   newItem[i][0] = arr2[i][0].toUpperCase()
    //   } else {
    //     newItem[i] = arr2[i]
    //   }
    // }
    // return newItem.join('')

  } else {
    //console.log(arr2)
    arr1 = arr1.join('')
    //console.log(arr2)
    arr1 = arr1.split('')
    //console.log(arr1)
    for (let i = 0; i < 1; i++) {
      if (i == 0) {
        arr1[i][0] = arr1[i][0].toUpperCase()
      } else if (i > 0) {
        arr1[i] = arr1[i].toLowerCase()
      }
      //arr2 = arr2.join('')
      newItem.push(arr1.join(''))
    }
    return newItem

    // result = arr1.map(item => {
    //   newItem[0] = item[0].toUpperCase()
    //   item[0] = newItem[0]
    //   return item
    // })
    // return result.join('')

    // for (let i = 0 ; i < arr1.length ; i++) {
    //   newItem = arr1
    //   if (i < 1) {
    //   newItem[i][0] = arr1[i][0].toUpperCase()
    //   } else {
    //     newItem[i] = arr1[i]
    //   }
    // }
    // return newItem.join('')
    return "Hello"
  }
}

console.log(toCamelCase("the-stealth-warrior"))
//console.log(toCamelCase("The_Stealth_Warrior"))