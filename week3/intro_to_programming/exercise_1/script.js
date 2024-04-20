function sortAndDisplayDigits() {
    const input = document.getElementById('digitInput').value;
    if (!input) {
        alert('Please enter some digits.');
        return;
    }
    const digits = input.split('').map(Number);
    digits.sort((a, b) => a - b);
    const sortedDigits = digits.join('');
    document.getElementById('result').textContent = sortedDigits;
}



