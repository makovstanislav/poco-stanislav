function substractAndDisplayNumbers() {
    const input = document.getElementById('numbersInput').value
    if (!input) {
        alert('Please enter numbers.')
        return
    }
    
    // convert input to numbers array
    const numbers = input.split(',').map(Number)
    
    // calculate the delta

    let delta = Math.max(...numbers) - Math.min(...numbers)
   
    // display
    document.getElementById('result').textContent = delta 
}