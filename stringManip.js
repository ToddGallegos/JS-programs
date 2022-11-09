/* Write a function subLength() that takes 2 parameters, a string and a single character.
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters.
If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/


function subLength(letters, letter) {
    // initialize a variable to keep track of how many instances of the character are in the string, and to save the indexes of the character in the string.
    let count = 0
    let indexes = []
    
    // iterates through string and compares each index to the given character, if same then increases count and adds that index to an array.
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === letter) {
        count++
        indexes.push(i)
      }
    }
  
    // checks if there were more or less than 2 of the character. if not, calculates length of character to character in the string.
    if (count !== 2) {
      return 0
    } else {
      return indexes[1] - indexes[0] + 1
    }
  }
  
