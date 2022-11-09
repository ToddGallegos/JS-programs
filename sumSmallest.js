/*function sumTwoSmallestNumbers(numbers) { 
  console.log(numbers) 
  numbers = numbers.sort((a,b) => {a - b})
  console.log(numbers)
  return numbers[0] + numbers[1]
  
}*/

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //should be 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //should be 6