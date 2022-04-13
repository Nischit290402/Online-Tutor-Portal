const express = require("express");
const router = express.Router();

const {
  getSubjects,
  getSubject
} = require("../controllers/subject");

router.route("/").get(getSubjects);
// router.route("/check-enroll/:id").get(checkEnroll);
router.route("/:id").get(getSubject);

module.exports = router;