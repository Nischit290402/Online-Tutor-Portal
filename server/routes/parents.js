const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
  checkEnroll,
} = require("../controllers/parents");

router.route("/").get(getAllCourses);
router.route("/check-enroll/:id").get(checkEnroll);
router.route("/:id").get(getCourse).post(enrollCourse).delete(unenrollCourse);

module.exports = router;
