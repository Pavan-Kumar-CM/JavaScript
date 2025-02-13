//  Constant
const USN = "4VV21CS108"
// USN = "PavanVV21CS108" NotAllowed Due to const


let userName = "Pavan Kumar C M"
userName = "Pavan Gowda" // allowed

let password = "Pav@123"

var gender = "Male"; //var have issue in block and functional scope Prefer to Use (let) Always

let marks; // Undefined Variable  

console.log("USN: " + USN)
console.log("Name: " + userName)
console.log("Gender: " + gender)
console.log(marks) //Output : undefined 

console.table([USN, userName, gender, marks]) // Show All The Values in table formate -> (index) | values