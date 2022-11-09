//probability

let heads = 0
let tails = 0
let total = 0

function coinFlip() {
    let flip = Math.floor(Math.random()*2+1)

    if (flip === 1){
        heads++
        total++
    } else {
        tails++
        total++
    }
    
}

function start(num) {
    while (total < num){
        coinFlip()
    }
}

start(1000)
console.log(`Heads: ${heads}/nTails: ${tails}`)