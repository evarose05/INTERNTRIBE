// This function fetches the values from input fields, performs the selected operation,
// handles division by zero, and displays the result in the result div.
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          result = "Error: Cannot divide by zero.";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operation.";
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
}

function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result: ";
}