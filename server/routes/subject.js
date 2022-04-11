const express = require("express");
const router = express.Router();

const {
  getSubjects,
} = require("../controllers/subject");

router.route("/").get(getSubjects);
// router.route("/check-enroll/:id").get(checkEnroll);
// router.route("/:id").get(getCourse).post(enrollCourse).delete(unenrollCourse);

module.exports = router;