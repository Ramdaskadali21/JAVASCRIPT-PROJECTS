// function to append a value to the display
function appendToDisplay(value) {
    document.getElementById('display').value +=value;
}

//function to clear the display
function clearDisplay() {
    document.getElementById('display').value="";
}
//function to remove the last character from the display
function removeLast() {
    const currentDisplayValue = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplayValue.slice(0,-1);
}

//function to perform the calculation
function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value=result;
    } catch (error) {
        document.getElementById('display').value='Error';
    }
}
//function to append to the display
function appendToDisaplay(value) {
    if(value === 'x') {
        document.getElementById('display').value +='x';

    } else {
        document.getElementById('display').value += value;
    }
}

//function to perform the calculation
function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/x/g, '*'); //replace x with *
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
