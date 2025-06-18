const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the year= ", function(yearInput) {
  const yr = parseInt(yearInput);

  if (isNaN(yr)) {
    console.log("Invalid input. Please enter a valid number.");
  } else if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
    console.log(yr + " is a leap year.");
  } else {
    console.log(yr + " is not a leap year.");
  }

  rl.close();
});