const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

// Signup route
router.post("/signup", usersController.signup);

// Login route
router.post("/login", usersController.login);

module.exports = router;
