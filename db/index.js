const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const configs = require("../configs");

const uri = configs.MONGO_DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToMongo = async () => {
	try {
		mongoose.set("strictQuery", false);
		mongoose.connect(uri);
		console.log("Connected to DB Successfully!");
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectToMongo;
