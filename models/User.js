let mongoose = require("mongoose");

//creating mongoose Schema
let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, max: 120 },
  email: { type: String, required: true, unique: true },
});
let user = new mongoose.model("users", userSchema);

module.exports = user;
