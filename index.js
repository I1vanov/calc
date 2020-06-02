// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDevide = document.getElementById('buttonDevide');

// var operationButtons = [buttonPlus,buttonMinus,buttonMultiply,buttonDevide];

var operationButtons = document.getElementsByClassName('operation-buttons')

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function makeOperation(operationCode) {
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);

    if(operationCode ==='+'){
        var result = num1 + num2;
    }else if (operationCode ==='-') {
        var result = num1 - num2;
    }else if (operationCode ==='*') {
        var result = num1 * num2;
    }else if (operationCode ==='/') {
        var result = num1 / num2;
    }else {
    }
    window.alert(result);
}

function onButtonPlusClick() {
    makeOperation('+');
}
function onButtonMinusClick() {
    makeOperation('-');
}
function onButtonMultiplyClick() {
    makeOperation('*');
}
function onButtonDevideClick() {
    makeOperation('/');
}
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
 makeOperation(operation);
}   



for (var i = 0; i < operationButtons.length; i++){
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}