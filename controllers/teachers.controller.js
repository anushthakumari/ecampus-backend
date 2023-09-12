const asyncHandler = require("../utils/asyncHandler");
const { generateToken } = require("../libs/jwt");
const teacher_model = require("../models/teacher.model");

exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const teacher = await teacher_model.findOne({ email, password });

	if (!teacher) {
		res.status(401).send({ message: "invalid credentials!" });
		return;
	}

	const token = generateToken({
		id: teacher.id,
		email: teacher.email,
		role: "teacher",
	});
	res.send({
		token,
		...teacher._doc,
	});
});

exports.register = asyncHandler(async (req, res, next) => {
	const {
		email,
		password,
		first_name,
		last_name,
		profile_url,
		contact,
		role,
		gender,
		degree,
		branch,
	} = req.body;

	const teacher = new teacher_model({
		email,
		password,
		first_name,
		last_name,
		profile_url,
		contact,
		role,
		gender,
		degree,
		branch,
	});

	await teacher.save();

	res.send({
		message: " successfull",
	});
});
