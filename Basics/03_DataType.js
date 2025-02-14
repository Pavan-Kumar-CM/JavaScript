// DataTypes 

let jerseyNumber = 17  // number upto (2)^53 - 1 => 9007199254740991

let playerName = "AB de Villiers" // string(text) type 

let isPlaying = false // boolean type => true/false

let t20Score = null // standalone object type

let salary; // undefined type

console.log(`0: ` + jerseyNumber)
console.log(`1: ` + playerName)
console.log(`2: ` + isPlaying)
console.log(`3: ` + t20Score)
console.log(`4: ` + salary)
console.table([jerseyNumber + typeof jerseyNumber, typeof playerName, typeof isPlaying, typeof t20Score, typeof salary])

