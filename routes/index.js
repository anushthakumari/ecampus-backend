const express = require("express");

const studentRoutes = require("./student.routes");
const teacherRoutes = require("./teacher.routes");

const router = express.Router();

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);

module.exports = router;
