const express = require('express');
const app = express();

// Define route for addition
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 + num2;
  res.json({ operation: 'addition', result });
});

// Define route for subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 - num2;
  res.json({ operation: 'subtraction', result });
});

// Define route for multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 * num2;
  res.json({ operation: 'multiplication', result });
});

// Define route for division
app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  if (num2 === 0) {
    res.status(400).json({ error: 'Division by zero is not allowed' });
  } else {
    const result = num1 / num2;
    res.json({ operation: 'division', result });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

