const express = require("express");
const app = express();
const port = 3000;

app.get("/convert/celsius-to-fahrenheit/:value", (req, res) => {
  const celsius = parseFloat(req.params.value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  res.json({ celsius, fahrenheit });
});

app.get("/convert/fahrenheit-to-celsius/:value", (req, res) => {
  const fahrenheit = parseFloat(req.params.value);
  const celsius = ((fahrenheit - 32) * 5) / 9;
  res.json({ fahrenheit, celsius });
});

app.get("/convert/km-to-miles/:value", (req, res) => {
  const km = parseFloat(req.params.value);
  const miles = km * 0.621371;
  res.json({ km, miles });
});

app.listen(port, () => {
  console.log(`API de conversiones corriendo en http://localhost:${port}`);
});
