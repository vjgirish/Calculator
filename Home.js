function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        if (/^[0-9+*/.\-() ]+$/.test(expression)) {
            const result = eval(expression);
            document.getElementById('display').value = result;
        } else {
            throw new Error('Invalid input');
        }
    } catch (error) {
        document.getElementById('display').value = 'ERROR';
    }
}

function isValidKey(event) {
    const key = event.key;
    return /[0-9+\-*/.%()=Enter]/.test(key);
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});

function focusInputField() {
    document.getElementById('display').focus();
}
