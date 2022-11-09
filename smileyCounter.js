// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  for (let i = 0 ; i< arr.length ; i++) {
    if (arr[i][0] == ":" || arr[i][0] == ";") {
      if (arr[i][1] == "-" || arr[i][1] == "~") {
        if (arr[i][2] == ")" || arr[i][2] == "D") {
          count++
        }
      } else if (arr[i][1] == ")" || arr[i][1] == "D") {
        count++
      }
    }
  }
  return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;

//SHOULD HAVE USED .FILTER()