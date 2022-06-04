//main functions

function add(a, b){
    return parseFloat(a) + parseFloat(b);
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
let storedValue = 0;
//let storedValue2 = 0;
let finalValue = 0;
let storedOperator = 0;


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

clearButton.addEventListener("click", function (event) {
    if (displayValue===0){
        //storedValue = 0;
        //finalValue = 0;
    } else {
        displayValue = 0;
        screen.textContent = 0;
    }
});

function storeDisplayValue(button){ 
    button.addEventListener("click", function(event){
        
        console.log(finalValue);
        console.log("before if statement: " + storedValue);

        if (storedOperator == "+") {
            finalValue = operate(add, storedValue, displayValue);
            console.log("1:" + storedValue);
            console.log("2:" + displayValue);
            console.log(finalValue);
        } else if (storedOperator == "-") {
            finalValue = operate(subtract, storedValue, displayValue);
            //console.log("1:" + storedValue);
            console.log("2:" + displayValue);
            console.log(finalValue);
        } else if (storedOperator == "*") {
            if (storedValue === 0) { storedValue = 1; };
            finalValue = operate(multiply, storedValue, displayValue);
            //console.log("1:" + storedValue);
            console.log("2:" + displayValue);
            console.log(finalValue);
        } else if (storedOperator == "/") {
            if (storedValue != 0) { finalValue = operate(divide, storedValue, displayValue); };
            //console.log("1:" + storedValue);
            console.log("2:" + displayValue);
            console.log(finalValue);
        }//else if(storedOperator = 0){storedValue = displayValue};
        console.log("after if statement: " + storedValue);
        console.log("------------------------------------");
        if(button == addButton){
                storedOperator = "+";
                //console.log("1:" + storedValue);
        }else if(button == subtractButton){
                storedOperator = "-";
                console.log("1:" + storedValue);
        }else if(button == multiplyButton){
                storedOperator = "*";
                console.log("1:" + storedValue);
        }else if(button == divideButton){
                storedOperator = "/";
                console.log("1:" + storedValue);
        }

        console.log("before1:" + storedValue);
        console.log("before2:" + displayValue);
        if (storedValue === 0) { storedValue = displayValue; };
        console.log("after1:" + storedValue);
        console.log("after2:" + displayValue);
        console.log("finalvalue:" + finalValue);
        console.log("-----------------------");

        displayValue = finalValue;
        storedValue = finalValue;
        screen.textContent = displayValue;
        displayValue = 0;
        console.log("end1:" + storedValue);
        console.log("end2:" + displayValue);
        console.log("end3:" + finalValue);
        console.log("-----------------------");
    
    })
};

function calculateValues(button){
    button.addEventListener("click", function(event){
            if (storedOperator == "+") {
                finalValue = operate(add, storedValue, displayValue);
                //console.log("1:" + storedValue);
                console.log("2:" + displayValue);
                console.log(finalValue);
            } else if (storedOperator == "-") {
                finalValue = operate(subtract, storedValue, displayValue);
                //console.log("1:" + storedValue);
                console.log("2:" + displayValue);
                console.log(finalValue);
            } else if (storedOperator == "*") {
                finalValue = operate(multiply, storedValue, displayValue);
                //console.log("1:" + storedValue);
                console.log("2:" + displayValue);
                console.log(finalValue);
            } else if (storedOperator == "/") {
                finalValue = operate(divide, storedValue, displayValue);
                //console.log("1:" + storedValue);
                console.log("2:" + displayValue);
                console.log(finalValue);
            } 
            displayValue = finalValue;
            storedValue = finalValue;
            screen.textContent = displayValue; // refreshes display value
    })    
};

storeDisplayValue(addButton);
storeDisplayValue(subtractButton);
storeDisplayValue(multiplyButton);
storeDisplayValue(divideButton);
calculateValues(equalButton);
//calculateValues(addButton);

//console.log(operate(add, 15, 5));


//NEED TO CALL calculateValues EVERYTIME an operator button is pressed.