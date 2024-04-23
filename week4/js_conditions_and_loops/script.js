// convert Integer into Binary String

let input = prompt("Enter a number")
if (input.isNan) {
    input = Number(input)
}
let outputString = ''

while (input !== 0) {
    outputString = (input % 2).toString() + outputString
    input = Math.floor(input / 2)
}

alert("The binary string is " + outputString) 


// convert Binary String to Integer
