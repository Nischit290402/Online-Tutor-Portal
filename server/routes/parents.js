const express = require("express");
const router = express.Router();

// Connect Parent Routes with Parent functions

const {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
  checkEnroll,
  getAllEnrolledCourses,
} = require("../controllers/parents");

router.route("/all/:uid").get(getAllCourses);
router.route("/check-enroll/:id/:uid").get(checkEnroll);
router.route("/enrolled/:uid").get(getAllEnrolledCourses);
router
  .route("/:id/:uid")
  .get(getCourse)
  .post(enrollCourse)
  .delete(unenrollCourse);

module.exports = router;
