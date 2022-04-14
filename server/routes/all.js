const express = require("express");
const router = express.Router();

const { getAllCourses } = require("../controllers/all");

router.route("/courses").get(getAllCourses);

module.exports = router;
