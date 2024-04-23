// convert Integer into Binary String

// pro version 
/* let input = 33;
i = 0;
let outputString = '';

do {
    let zeroOrOne = input % 2;
    outputString = `${zeroOrOne}${outputString}`
    input /= 2
} while (input > 1)


console.log(outputString) */

// loop version
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum
}

function decimalToBinaryHonest(decimalNumber) {
    let remainedDecimal = decimalNumber
    let outputString = ''
    let resultArr = []
    let resultArraySum = sumArray(resultArr)

    // record the remainder
    for (let i = 0; resultArraySum != remainedDecimal; i++) {
        remainedDecimal = Math.floor(remainedDecimal / 2)
        outputString = outputString.concat((remainedDecimal % 2).toString)
        resultArr.push(2 ** i)
    }

    return outputString
    
}

const decimalNum = 33;
const resultHonest = decimalToBinaryHonest(decimalNum);
console.log('Honest: ' + resultHonest) 


// convert Binary String to Integer
