const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  image_url: String,
  email: String,
  password: String,
});

// Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
