const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/tutors");

router.route("/").get(getAllCourses);
router.route("/create-course").post(createCourse);
router.route("/:id").get(getCourse).patch(updateCourse).delete(deleteCourse);

module.exports = router;
