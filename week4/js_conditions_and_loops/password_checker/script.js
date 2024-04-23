let input = prompt('Please enter your fantastic password')
// let input = '7passwW7!85'

/* 
- upper
- numbers
- min 8chars and max 12chars
- no spaces
*/


let containsUpperCase = false
let containsNumber = false
let isGoodLength = false
let hasSpace = false
let containSpecialChars = false

const specialChars = '!@#$%^&*()_-+='
const numbers = '1234567890'
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

for (let i=0; i < input.length; i++) {
    let char = input[i]
    if (upperCaseLetters.includes(char)) {
        containsUpperCase = true
    } else if (numbers.includes(char)) {
        containsNumber = true
    } else if (specialChars.includes(char)) {
        containSpecialChars = true
    } else if (char == ' ') {
        hasSpace = true
        alert('Please don\'t use a space' )
    }
}

if (input.length >= 8 && input.length <= 12) {
    console.log(input.length)
    isGoodLength = true
}


console.log(containsUpperCase)
console.log(containsNumber)
console.log(isGoodLength)
console.log(hasSpace)

if (containsUpperCase && containsNumber && isGoodLength && hasSpace === false && containSpecialChars) {
    alert('Fantastic password')
} else {
    alert('Invalid input')
}



