const express = require("express");

const app = express();

const checkNumbers = (req) => {

  if (isNaN(req.query.num1) || isNaN(req.query.num1)) {
    throw new Error("Invalid numbers");
  }
  return true
}

const calculate = (num1, num2, operation) => {
  var result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0)
        throw new Error("Division by zero is not allowed");
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operation");
  }
  return result;
}

app.get("/add", (req, res) => {
  try {
    var operation = "add"

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);

    if (isNaN(num1))
      throw new Error("Invalid number num1");
    if (isNaN(num2))
      throw new Error("Invalid number num2");

    const result = calculate(num1, num2, operation);
    res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

  } catch (error) {
    res.json(error.toString())
  }
});

app.get("/subtract", (req, res) => {
  try {
    var operation = "subtract"

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);

    if (isNaN(num1))
      throw new Error("Invalid number num1");
    if (isNaN(num2))
      throw new Error("Invalid number num2");

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);
    const result = calculate(num1, num2, operation);
    res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

  } catch (error) {
    res.json(error.toString())
  }
});

app.get("/multiply", (req, res) => {
  try {
    var operation = "multiply"

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);

    if (isNaN(num1))
      throw new Error("Invalid number num1");
    if (isNaN(num2))
      throw new Error("Invalid number num2");

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);
    const result = calculate(num1, num2, operation);
    res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

  } catch (error) {
    res.json(error.toString())
  }
});

app.get("/divide", (req, res) => {
  try {
    var operation = "divide"

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);

    if (isNaN(num1))
      throw new Error("Invalid number num1");
    if (isNaN(num2))
      throw new Error("Invalid number num2");

    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);
    const result = calculate(num1, num2, operation);
    res.json('Parameters ' + num1 + ' and ' + num2 + ' received for operation -> ' + operation + ': And the result is ' + result);

  } catch (error) {
    res.json(error.toString())
  }
});

const port = 3040;
app.listen(port, () => {
  console.log("listening to port " + port);
})
