// convert Integer into Binary String

let input = prompt("Enter a number")
if (input.isNan) {
    input = Number(input)
}
let outputString = ''


do {
    outputString = (input % 2).toString() + outputString
    input = Math.floor(input / 2)
} while (input != 0) 

alert("The binary string is " + outputString) 