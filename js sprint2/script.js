let display = document.getElementById("display");

function deleteLast() {
  if (display.innerText.length === 1 || display.innerText === "Error") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function appendNumber(num) {
  if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) return;
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = "0";
}

function calculateResult() {
  try {
    let result = eval(display.innerText);
    if (!isFinite(result)) {
    
      display.innerText = "Error";
    } else {
      display.innerText = result;
    }
  } catch {
    display.innerText = "Error";
  }
}