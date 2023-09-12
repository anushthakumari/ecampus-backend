const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
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
	role: {
		type: String,
		required: true,
	},

	gender: {
		type: String,
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
});

const TeacherModel = mongoose.model("teachers", teacherSchema);

module.exports = TeacherModel;
