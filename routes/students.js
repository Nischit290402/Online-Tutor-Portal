const express = require("express");
const router = express.Router();

const { getAllCourses, getCourse } = require("../controllers/students");

router.route("/").get(getAllCourses);
router.route("/:id").get(getCourse);

module.exports = router;
