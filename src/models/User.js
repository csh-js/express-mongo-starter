const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  age: { type: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
