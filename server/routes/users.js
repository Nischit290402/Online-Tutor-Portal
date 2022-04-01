const express = require("express");
const router = express.Router();

const {
  CreateUserAndTutor,
  CreateParentAndStudent,
  CheckUser,
} = require("../controllers/users");

router.route("/createTutor").post(CreateUserAndTutor);
router.route("/createParent").post(CreateParentAndStudent);
router.route("/check/:id").get(CheckUser);
module.exports = router;
