const express = require("express");

const {
	login,
	register,
	verifyStudent,
} = require("../controllers/teachers.controller");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/verify-student").get(verifyStudent);

module.exports = router;
