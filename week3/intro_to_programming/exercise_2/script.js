let sum = 0

function addAndDisplayNumbers() {
    const input = document.getElementById('numbersInput').value
    if (!input) {
        alert('Please enter a number.')
        return
    }
    
    // add input to a number
    sum = sum + Number(input)

    // display
    document.getElementById('result').textContent = sum
}