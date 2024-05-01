let currentAge = prompt('What is your age?')
let retirementAge = prompt('At what age would you like to retire?')
let yearsLeft
let retirementYear

function calculateRetirement() {
    // validate

    // calc years left
    yearsLeft = Number(retirementAge) - Number(currentAge)

    // calc retirement year 
    const currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    retirementYear = currentYear + yearsLeft

    // display results
    alert(`You have ${yearsLeft} years left until you can retire. It's ${currentYear}, so you can retire in ${retirementYear}.`)
}   

calculateRetirement()

