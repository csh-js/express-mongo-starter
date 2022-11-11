const express = require('express');
const app = express();
const PORT = 5000;

// Routes
app.get('/', (req, res) => {
  res.status(200).send("Welcome");
});

app.get('/hello', (req, res) => {
  res.status(200).send("Hello");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
