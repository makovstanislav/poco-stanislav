// convert Binary String into Integer

let input = prompt("Enter a Binary String")
let reversed = input.split('').reverse().join('');
let exponents = input.length

let result = 0

for (let i = 0; i < exponents; i++) {
    let oneOrZero = reversed[i]
    let res = oneOrZero * (2** i)
    result = res + result
}

alert("The number is " + result) 
