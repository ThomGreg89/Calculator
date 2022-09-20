// Use this as your primary JavaScript file.
// The expectation is that you will organize
// your project into modules which will
// require exports and imports
//import Calculator from './calculator.js';




//export and import was not working when putting type="module"
const input = document.getElementById('input');
const result = document.getElementById('result');
const clear = document.getElementById('clear');
const number = document.querySelectorAll('.numbers div');
const operator = document.querySelectorAll('.operators div');
input.innerHTML = 0;


Calculator();
/*class Calculator {
    constructor (output) {
        this.output = output;
        this.clear();
    }

    clear(){
        this.output = "";
        this.operation = undefined;
    }

    appendNum(number){
        this.output = number;
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.output.innerText = this.output;
    }
}




//store variable
const numButton = document.querySelectorAll(".numbers");
const opButton = document.querySelectorAll(".operators");
const equalButton = document.querySelector("#result");
const clearButton = document.querySelector("#clear");
const output = document.querySelector("#output");

const calculator = new Calculator(output);

numButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    })
})*/