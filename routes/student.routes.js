const express = require("express");

const auth = require("../middlewares/auth.middleware");

const { login, register } = require("../controllers/students.controller");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
