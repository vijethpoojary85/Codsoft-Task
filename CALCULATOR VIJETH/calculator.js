let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').textContent = '0';
}

function calculateResult() {
    try {
        let result = displayValue.replace(/sin/g, 'Math.sin');
        result = result.replace(/cos/g, 'Math.cos');
        result = result.replace(/tan/g, 'Math.tan');
        result = result.replace(/sqrt/g, 'Math.sqrt');
        result = result.replace(/\^/g, '**'); 

        const finalResult = eval(result);
        displayValue = finalResult.toString();
        document.getElementById('display').textContent = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').textContent = displayValue;
    }
}
