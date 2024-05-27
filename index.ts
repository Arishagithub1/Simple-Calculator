#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the  to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}else {
    console.log("Please Select Valid Operator");
}
