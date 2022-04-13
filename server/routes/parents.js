const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
  checkEnroll,
} = require("../controllers/parents");

router.route("/all/:uid").get(getAllCourses);
router.route("/check-enroll/:id/:uid").get(checkEnroll);
router
  .route("/:id/:uid")
  .get(getCourse)
  .post(enrollCourse)
  .delete(unenrollCourse);

module.exports = router;
