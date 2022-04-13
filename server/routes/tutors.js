const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  uploadFile,
} = require("../controllers/tutors");

router.route("/all/:uid").get(getAllCourses);
router.route("/create-course/:uid").post(createCourse);
router
  .route("/:id/:uid")
  .get(getCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

module.exports = router;
