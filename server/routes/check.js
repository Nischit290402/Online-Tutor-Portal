const express = require("express");
const router = express.Router();

const { checkUser } = require("../controllers/check");

router.route("/").get(checkUser);

module.exports = router;
