const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");
const configs = require("./configs");
const errorHandler = require("./middlewares/errorHandler.middleware");
const apiRoutes = require("./routes");

const app = express();
db();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/ecampus-api", apiRoutes);

app.use(errorHandler);

// Start the server
const port = configs.PORT; // You can change this to any port you prefer

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
