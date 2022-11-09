// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three
// vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter
// O in an array [xO, yO] This is how our asked function should work: the result of the coordinates
// should be expressed up to four decimals, (rounded result). You know that the coordinates of the
// barycenter are given by the following formulas...

function barTriang(p1, p2, p3){
  //let Arr = []
  //Arr.push(...)
let x = parseFloat(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4))
let y = parseFloat(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4))
  //return Arr
  return [x,y]
}

console.log(barTriang([4, 6], [12, 4], [10, 10]))