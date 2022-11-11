const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./models/User.js");
const PORT = 5000;

// DB-Config
let connection;
const dbConfig = async () => {
  try {
    connection = await mongoose.connect("mongodb://mongo:27017/user-db", { useNewUrlParser: true });
  } catch (err) {
    console.log("Error connecting to db");
  }
};

dbConfig();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello 2");
});

app.post('/user', async (req, res) => {
  const {name, age} = req.body;
  const user = await User.create({name, age});
  res.send(user);

});

app.get('/user', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
