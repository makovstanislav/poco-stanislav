let input = prompt('Please enter your password')

/* 
- upper
- numbers
- min 8chars and max 12chars
- no spaces
*/

let containsUpperCase = false
let containsNumber = false
let isGoodLength = false
let noSpace = true

for (let i=0; i < input.length; i++) {
    let char = input[i]
    if (char === char.toUpperCase()) {
        containsUpperCase = true
    } else if (isNaN(parseFloat(char))) {
        containsNumber = true
    } else if (char === ' ') {
        alert('Please don\'t use a space' )
        break
    }
}

if (input.length >= 8 && input.length <= 12) {
    console.log(input.length)
    isGoodLength = true
}

if (containsUpperCase && containsNumber && isGoodLength && noSpace) {
    alert('Fantastic password')
} else {
    console.log(containsUpperCase)
    console.log(containsNumber)
    console.log(isGoodLength)
    console.log(noSpace)
    alert('Invalid input')
}



