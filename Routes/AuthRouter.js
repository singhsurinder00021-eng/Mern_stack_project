const express = require("express");
const router = express.Router();

const { Signup, login } = require("../Controllers/AuthController");
const { SignupValidation ,LoginValidation } = require("../MiddleWare/AuthValidation");

router.post("/login", LoginValidation, login);
router.post("/signup", SignupValidation, Signup);

module.exports = router;
