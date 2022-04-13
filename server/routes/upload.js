const express = require("express");
const router = express.Router();

const { uploadFile } = require("../controllers/tutors");

router.route("/:id").post(uploadFile);

module.exports = router;
