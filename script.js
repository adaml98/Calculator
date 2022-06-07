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

const values = [];
let displayValue = 0;
let storedValue = 0;
//let storedValue2 = 0;
let finalValue = 0;
let storedOperator = 0;

//HTML CALCULATOR
const numbers = document.querySelector("#numbers");
const screen = document.querySelector("#screen");
screen.textContent = 0;
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
        storedValue += div.value; 
        screen.textContent = parseFloat(displayValue);
    });
};


//OPERATORS
const clearButton = document.querySelector("#clear"); //TO DO Make clear button change from AC ce etc.
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equal");

//mouseover button effects
mouseOver(clearButton);
mouseOver(addButton);
mouseOver(subtractButton);
mouseOver(multiplyButton);
mouseOver(divideButton);
mouseOver(equalButton);

//CALCULATE 

function calculate(){
    if (storedOperator === "add") {
        finalValue = operate(add, values[values.length - 2], values[values.length - 1]); // add to total
    } else if (storedOperator === "subtract") {
        finalValue = operate(subtract, values[values.length - 2], values[values.length - 1]);
    } else if (storedOperator === "divide") { // TO DO  refresh calculator if user tries to divide by zero 
        if (values[values.length - 1] === 0) {
            alert("You can't divide by zero!");
        } else {
            finalValue = operate(divide, values[values.length - 2], values[values.length - 1]);
        }
    } else if (storedOperator === "multiply") {
        finalValue = operate(multiply, values[values.length - 2], values[values.length - 1]);
    }
}

//STORE OPERATOR
function storeOperator(button){
    button.addEventListener("click", function(event){

        //stop array getting too big ------ DOESNT WORK 
        if (values[values.length] > 2){
            values.shift();
        }

        //add final value to array
        if (finalValue != 0){
            values.push(parseFloat(finalValue));
        }
        //add display value to array
        values.push(parseFloat(storedValue));
        storedValue = 0;
       
        calculate();

        console.log(values);
        
        //Store operator
        if (button == addButton) {
            storedOperator = "add";
        } else if (button == subtractButton) {
            storedOperator = "subtract";          
        } else if (button == multiplyButton) {
            storedOperator = "multiply";
        } else if (button == divideButton) {
            storedOperator = "divide";
        }

        //UPDATE SCREEN
        displayValue = 0;
        screen.textContent = finalValue;
    })
    
};

storeOperator(addButton);
storeOperator(subtractButton);
storeOperator(multiplyButton);
storeOperator(divideButton);

//OPERATE BUTTON

equalButton.addEventListener("click", function(event){

    if (finalValue != 0) {
        values.push(parseFloat(finalValue));
    } else {
        finalValue = parseFloat(displayValue);
    }
    //add display value to array
    values.push(parseFloat(storedValue));
    storedValue = 0;
    
    calculate();

    screen.textContent = finalValue;
})

//CLEAR BUTTON
clearButton.addEventListener("click", function (event) {
    if (displayValue === 0){
        storedValue = 0;
        finalValue = 0;
        screen.textContent = displayValue;
    } else {
        displayValue = 0;
        storedValue = 0;
        screen.textContent = displayValue;
    }
});
