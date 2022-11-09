// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

// returns creature objects with an assigned number and random dna array
function pAequorFactory(num, arr) {
    return {
        num,
        dna: arr,

        // randomly mutates 1 dna base of the creature
        mutate() {
            let DNAbases = ['A', 'T', 'C', 'G'];
            let ranDNAindex = Math.floor(Math.random() * 15);
            let ranDNAbase = DNAbases[Math.floor(Math.random() * 4)];
            while (this.dna[ranDNAindex] == ranDNAbase) {
                ranDNAbase = DNAbases[Math.floor(Math.random() * 4)];
            }
            this.dna[ranDNAindex] = ranDNAbase;
        },

        // prints what percentage dna is shared between this and an argument creature
        compareDNA(obj) {
            let sameNum = 0;
            let percentSame;
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] == obj.dna[i]) {
                    sameNum++;
                }

            }
            percentSame = Math.floor(sameNum / 15 * 100);
            console.log(`specimen #1 and specimen #2 have ${percentSame}% DNA in common`);
        },

        // returns boolean of whether creature is likely to survive if has at least 60% C and G base dna
        willLikelySurvive() {
            let count = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] == 'C' || this.dna[i] == 'G') {
                    count++
                };
            };
            if (count / 15 * 100 >= 60) {
                return true;
            } else {
                return false;
            };
        }
    };
};

// returns array of desired number of random creatures
function createCreatures(num) {
    let creatures = [];
    for (let i = 0; i < num; i++) {
        creatures[i] = (pAequorFactory(i, mockUpStrand()));
    };
    return creatures;
};

// returns array of desired number of creatures likely to survive
function viableCreatures(num) {
    let strongCreatures = [];
    let count = 0;
    while (count < num) {
        let tempCreature = pAequorFactory(count, mockUpStrand());
        if (tempCreature.willLikelySurvive()) {
            strongCreatures.push(tempCreature)
            //strongCreatures[count] = tempCreature;
            count++
        };
    };
    return strongCreatures
};

/*
TEST CODE
let bestCreatures = viableCreatures(3)
console.log(bestCreatures)
console.log(bestCreatures[0].willLikelySurvive())
console.log(bestCreatures[1].willLikelySurvive())
console.log(bestCreatures[2].willLikelySurvive())
let newCreatures = createCreatures(2)
console.log(newCreatures)
console.log(newCreatures[0].willLikelySurvive())
console.log(newCreatures[1].willLikelySurvive())
*/