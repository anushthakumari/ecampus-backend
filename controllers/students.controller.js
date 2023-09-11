const asyncHandler = require("../utils/asyncHandler");
const { generateToken } = require("../libs/jwt");
const studen_model = require("../models/student.model");

exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const student = await studen_model.findOne({ email, password });

	if (!student) {
		res.status(401).send({ message: "invalid credentials!" });
		return;
	}

	const token = generateToken({
		id: student.id,
		email: student.email,
	});
	res.send({
		token,
		...student,
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
		roll_no,
		gender,
		category,
		degree,
		branch,
		address,
		father_email,
		mother_email,
		father_contact,
		mother_contact,
	} = req.body;

	const student = new studen_model({
		email,
		password,
		first_name,
		last_name,
		profile_url,
		contact,
		roll_no,
		gender,
		category,
		degree,
		branch,
		address,
		father_contact,
		father_email,
		mother_contact,
		mother_email,
	});

	const data = await student.save();

	const token = generateToken({
		id: data.id,
		email: email,
	});

	res.send({
		message: "Login successfull",
		token,
	});
});
