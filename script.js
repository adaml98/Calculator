//main functions

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    return operator(a, b);
}

//css functions 

function mouseOver(divName) {
    divName.addEventListener("mouseover", () => {
        divName.style.backgroundColor = "white";
    });
    divName.addEventListener("mouseout", () => {
        divName.style.backgroundColor = "grey";
    });
} 
let displayValue = 0;
let secondValue = 0;
let finalValue = 0;


//HTML CALCULATOR
const numbers = document.querySelector("#numbers");
const screen = document.querySelector("#screen");
for (i=0; i<10;i++){
    const div = document.createElement("button");
    div.textContent = i;
    div.value = i;
    numbers.appendChild(div);
    div.style.cssText = `height: 170px; width: 230px; margin: 5px; background-color: grey;
        font-size: 90px; display:flex; align-items:center; justify-content: center;`;
    mouseOver(div);
    div.addEventListener("click", function(event){
        displayValue += div.value;
        screen.textContent = displayValue.slice(1);
    });
};


//ADD VALUES TO SCREEN

//OPERATORS

const clearButton = document.querySelector("#clear"); //TO DO Make clear button change from AC ce etc.
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equal");

mouseOver(clearButton);
mouseOver(addButton);
mouseOver(subtractButton);
mouseOver(multiplyButton);
mouseOver(divideButton);
mouseOver(equalButton);
