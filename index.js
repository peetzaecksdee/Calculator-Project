let operator;
let result = 0;
let number = "0";
const buttons = document.querySelectorAll("button");
const textDisplay = document.querySelector(".display");

window.addEventListener("keydown", (e) => handleKeyboard(e));

buttons.forEach((Btn) => {
  Btn.addEventListener("click", (e) => clickHandler(e.target.value));
});

function clickHandler(e) {
  if (isNaN(e) && e !== ".") {
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
  if (number === "0") return;

  const anotherNumber = parseInt(number);

  if (result === 0) {
    result = anotherNumber;
  } else {
    mathCalculation(anotherNumber);
  }
  operator = symbol;
  number = "0";
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "clear":
      clear();
      break;
    case "abs":
      number = number.startsWith("-") ? number.replace("-", "") : `-${number}`;
      break;
    case "%":
      number *= 0.01;
      break;
    case "=":
      evaluate();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      handleCalculation(symbol);
      break;
  }
}

function evaluate() {
  if (operator === null) return;
  operate(parseInt(number));
  operator = null;
  number = result;
  result = 0;
}

function handleNumber(stringNumber) {
  if (number === "0") {
    number = stringNumber;
  } else {
    if (stringNumber !== "." || !number.includes(".")) {
      number += stringNumber;
    }
  }
}

function operate(anotherNumber) {
  if (operator === "+") {
    result += anotherNumber;
  } else if (operator === "-") {
    result -= anotherNumber;
  } else if (operator === "*") {
    result *= anotherNumber;
  } else if (operator === "/") {
    if (anotherNumber === 0) {
      result = "Why?";
      return;
    }
    result /= anotherNumber;
  }
  textDisplay.textContent = Math.round(number * 1000) / 1000;
}

function deleteNumber() {
  number = number.slice(0, -1);
}

function handleKeyboard(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key === ".") handleNumber(e.key);
  if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "%"
  )
    handleSymbol(e.key);
  if (e.key === "Enter" || e.key === "=") evaluate();
  if (e.key === "Backspace") deleteNumber();
  textDisplay.textContent = number;
}
