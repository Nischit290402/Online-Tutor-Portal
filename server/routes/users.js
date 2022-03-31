const express = require("express");
const router = express.Router();

const {
  CreateUserAndTutor,
  CreateParentAndStudent,
} = require("../controllers/users");

router.route("/createTutor").post(CreateUserAndTutor);
router.route("/createParent").post(CreateParentAndStudent);

module.exports = router;
