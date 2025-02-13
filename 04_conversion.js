// Conversion in Js

let age = 20 // input received number 

let heightInCm = "163" // input received string 
let height = Number(163) // conversion to number
console.log(typeof height) // due to better understanding height must in number formate

let salary = "₹32,000"
let salaryInNumber = Number(salary) // conversion to number 
console.log(salaryInNumber) // NaN - Not a Number  due to '₹'

let matchesPlayed = null;
let matchesInNumber = Number(matchesPlayed)
console.log(matchesInNumber) // null conversion into '0'


let isPlaying = true;
let isPlayingMatches = Number(isPlaying);
console.log(isPlayingMatches) // 1 => true | 0 => false


let playerName = ""
let isPlayerNamePresent = Boolean(playerName); // conversion to boolean if string is empty => boolean : false
console.log(isPlayerNamePresent) // false due no value present in string ""

let userName = "Pavan Kumar C M"
let isUserNamePresent = Boolean(userName); // conversion to boolean if string is not empty => boolean : true
console.log(isUserNamePresent) // true due value present in string "Pavan Kumar C M"

