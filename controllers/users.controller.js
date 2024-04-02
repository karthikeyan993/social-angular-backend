const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const { first_name, last_name, image_url, email, password } = req.body;
  const newUser = new User({
    first_name,
    last_name,
    image_url,
    email,
    password,
  });
  newUser
    .save()
    .then(() => res.status(201).json({ message: "User created" }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            res.json({
              first_name: user.first_name,
              last_name: user.last_name,
              image_url: user.image_url,
              email: user.email,
            });
          } else {
            res.status(401).json({ error: "Invalid credentials" });
          }
        })
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};
