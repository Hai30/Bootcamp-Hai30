//  ARRAYS:


// const myStuff = ["Squid hat", "Portrait of a wizard", "Passport"]

// const lastItem = myStuff[myStuff.length - 1]
// const firstItem = myStuff[0]

// myStuff.unshift(lastItem)
// myStuff.push(firstItem)

// console.log(myStuff) // prints ["Passport", "Squid hat", "Portrait of a wizard", "Passport", "Squid hat"]


//  Exercise1:
//  =========

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let newOrderGenes = []
newOrderGenes.push(...genes)
newOrderGenes[2]= genes[4]
newOrderGenes[4] = genes[2]
newOrderGenes.splice(3,1)
newOrderGenes.push("AZIN2")
newOrderGenes.push("AZIN2")
console.log(newOrderGenes)
let finalOrderGenes = ["FXT"]
finalOrderGenes.push(...newOrderGenes)
console.log(finalOrderGenes)