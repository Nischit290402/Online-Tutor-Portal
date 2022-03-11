const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
} = require("../controllers/parents");

router.route("/").get(getAllCourses);
router.route("/:id").get(getCourse).post(enrollCourse).delete(unenrollCourse);

module.exports = router;
