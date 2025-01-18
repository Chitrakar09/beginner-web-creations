let buttons = document.querySelectorAll("button");
let screen = document.querySelector("input");
let string = "";
let numVal = "";
let bracket = "(";

let toggleForBracket = () => {
  if (bracket === "(") {
    key = "(";
    string += key;
    screen.value = string;
    bracket = ")";
  } else {
    key = ")";
    string += key;
    screen.value = string;
    bracket = "(";
  }
};

let toggleForIncDec = () => {
  let currentValue = parseFloat(screen.value);
  currentValue = -currentValue;
  screen.value = currentValue;
  string = currentValue.toString();
};

let flip = (key) => {
  if (key === "()") {
    toggleForBracket();
  } else {
    toggleForIncDec();
  }
};

let calculation = (string) => {
  let result = eval(string);
  return result;
};

let keyValSeperation = (evt) => {
  key = evt.target.dataset.key;
  if (key === "C") {
    string = "";
    bracket = "(";
    incDec = "+";
    screen.value = string;
  } else if (key === "=") {
    let result = calculation(string);
    screen.value = result;
    string = result.toString();
  } else if (key === "()") {
    flip(key);
  } else if (key === "#") {
    flip(key);
  } else if (key === "÷") {
    key = "/";
    string += key;
    screen.value = string;
  } else {
    string += key;
    screen.value = string;
  }
};

buttons.forEach((button) => button.addEventListener("click", keyValSeperation));
