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
  num1 = result;
  num2 = 0;
}

let operator, num1, num2, result;
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const functions = document.querySelectorAll(".function");

numbers.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (e) => clickHandler(e.target.value));
});

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => clickHandler(e.target.value));
});

functions.forEach((functionBtn) => {
  functionBtn.addEventListener("click", (e) => clickHandler(e.target.value));
});

function clickHandler(e, type) {
  if (type === "number") {
    
  }
}
