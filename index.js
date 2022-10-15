const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, numOne, numTwo) {
  switch (operator) {
    case "+":
      result = add(numOne, numTwo);
      break;
    case "-":
      result = subtract(numOne, numTwo);
      break;
    case "*":
      result = multiply(numOne, numTwo);
      break;
    case "/":
      result = divide(numOne, numTwo);
      break;
  }
}

let operator,
  result,
  number = "0";
const buttons = document.querySelectorAll("button");
const textDisplay = document.querySelector(".display");

buttons.forEach((Btn) => {
  Btn.addEventListener("click", (e) => clickHandler(e.target.value));
});

function clickHandler(e, type) {
  if (isNaN(e)) {
    handleSymbol(e);
  } else {
    handleNumber(e);
  }
  textDisplay.textContent = number;
}

function clear() {
  textDisplay.textContent = "0";
  number = "0";
  result = 0;
  operator = undefined;
}

function handleCalculation(symbol) {
  if (number === 0) return;

  const anotherNumber = number;
  return;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "clear":
      clear();
      break;
    case "abs":
      number = number.startsWith("-") ? number.replace("-", "") : `-${number}`;
      break;
    case "percent":
      number = 
  }
}

function handleNumber(stringNumber) {
  if (number === "0") {
    number = stringNumber;
  } else {
    number += stringNumber;
  }
}
