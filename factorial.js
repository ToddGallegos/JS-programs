

//THIS WORKED BUT MARKED WRONG BECAUSE OF THE SOLUTION BELOW IT
/*
//helper function for .reduce() method
const multiplier = (a, b) => a * b

//takes number and returns factorial of that number
function factorial(n) {
  let numArray = [];
  let answer;
  //creates array of number plus all numbers below it to zero
  for (i=n ; i > 0 ; i--) {
    numArray.push(i);
  }
  //uses .reduce() with a helper function to return the factorial
  return numArray.reduce(multiplier)
}
console.log('Original code: ', factorial(6))
*/

// BETTER CODE:
function factorial(n) {
  let answer = 1;
  for (let i=n ; i > 0 ; i--) {
    answer *= i 
  }
  return answer
}

console.log('Concise code:', factorial(6))
//oh whoopty doo, look how elegant and concise I am!