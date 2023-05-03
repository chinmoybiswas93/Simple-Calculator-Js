function btnClick(event) {
  console.log(event.target);
}

let inputField = document.getElementById("inputField");

function numberInput(event) {
  let inputNumebr = event.target.innerText;
  if (inputField.value === "0") {
    inputField.value = inputNumebr;
  } else {
    inputField.value += inputNumebr;
  }
}

function allClear() {
  inputField.value = "0";
}

function deleteNumber() {
  let previousValue = inputField.value;
  length = previousValue.length;
  if (previousValue !== "0") {
    inputField.value = previousValue.slice(0, -1);
  }
}

function calculate() {
  let correctString = inputField.value.replace("÷", "/");
  let resut = eval(correctString);
  inputField.value = resut;
}
