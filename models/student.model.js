const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	profile_url: {
		type: String,
	},
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	contact: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},

	roll_no: {
		type: Number,
		required: true,
		unique: true,
	},

	gender: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		default: "open",
		required: true,
	},
	degree: {
		type: String,
		required: true,
	},
	branch: {
		type: String,
		required: true,
	},

	address: {
		type: String,
	},

	father_email: {
		type: String,
	},
	mother_email: {
		type: String,
	},
	father_contact: {
		type: String,
	},
	mother_contact: {
		type: String,
	},
});

const StudentModel = mongoose.model("students", studentSchema);

module.exports = StudentModel;
