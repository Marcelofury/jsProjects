function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
return ''

const lowercaseChars= "abcdefghijklmnopqrstuvwxyz"
const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberChars = "0123456789"
const symbolChars="@#$%^&*()_+!~"

let allowedChars=""
let password=""

allowedChars +=includeLowercase ? lowercaseChars : ""
allowedChars +=includeUppercase ? uppercaseChars : ""
allowedChars +=includeNumbers ? numberChars : ""
allowedChars +=includeSymbols ? symbolChars : ""

console.log(allowedChars)

}

const passwordLength=12
const includeLowercase=true
const includeUppercase=true
const includeNumbers=true
const includeSymbols=true

const password = generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols)

console.log(`generated password:${password}`)