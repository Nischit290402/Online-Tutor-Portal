const express = require("express");
const router = express.Router();

const { getAllCourses, getAllTutors } = require("../controllers/all");

router.route("/courses").get(getAllCourses);
router.route("/tutors").get(getAllTutors);

module.exports = router;
