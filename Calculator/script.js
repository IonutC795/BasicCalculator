
const plusButton = document.querySelector('.plus-button');
const calculatorNumber = document.querySelector('.calculator-number');
const minusButton = document.querySelector('.minus-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const helpButton = document.querySelector('.help-button');
const resetButton = document.querySelector('.reset-button');
const resetCountDisplay = document.getElementById('resetCount');

let number = 0;
let resetCount = 0;

const updateCalculatorNumber = () => {
    calculatorNumber.innerText = number;

    if(number > 10) {
        calculatorNumber.style.fontSize = '72px';
    }

    if(number <= 10 ) {
        calculatorNumber.style.fontSize = '52px';
    }
}

const addOne = () => {
    number++;
    updateCalculatorNumber();
};

plusButton.addEventListener('click', addOne);

const minusOne = () => {
    number--;
    updateCalculatorNumber();
};

minusButton.addEventListener('click', minusOne);

const multiplyTwo = () => {
    number *= 2;
    updateCalculatorNumber();
};

multiplyButton.addEventListener('click', multiplyTwo);

const divideTwo = () => {
    number /= 2;
    updateCalculatorNumber();
};

divideButton.addEventListener('click', divideTwo);


const resetCalculator = () => {
    number = 0;
    resetCount++;
    updateCalculatorNumber();
    resetCountDisplay.textContent = "Calculatorul a fost resetat de " + resetCount + " ori.";
};

resetButton.addEventListener('click', resetCalculator);

const showInstructions = () => {
    alert ('Folosiți butoanele de operații (+, -, *, /) pentru a efectua calcule.')
};

helpButton.addEventListener('click', showInstructions);

