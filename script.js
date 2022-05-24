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



//HTML CALCULATOR
const numbers = document.querySelector("#numbers");
for (i=1; i<10;i++){
    const div = document.createElement("div");
    div.textContent = i;
    numbers.appendChild(div);
    div.style.cssText = `height: 225px; width: 225px; margin: 5px; background-color: grey;
        font-size: 90px; display:flex; align-items:center; justify-content: center;`;
    mouseOver(div);
};

//OPERATORS

const addDiv = document.querySelector("#add");
const subtractDiv = document.querySelector("#subtract");
const multiplyDiv = document.querySelector("#multiply");
const divideDiv = document.querySelector("#divide");

mouseOver(addDiv);
mouseOver(subtractDiv);
mouseOver(multiplyDiv);
mouseOver(divideDiv);