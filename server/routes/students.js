const express = require("express");
const router = express.Router();

const { getAllEnrolledCourses, getCourse } = require("../controllers/students");

// Connect Student Routes with Student functions

router.route("/:uid").get(getAllEnrolledCourses);
router.route("/get/:id").get(getCourse);

module.exports = router;
