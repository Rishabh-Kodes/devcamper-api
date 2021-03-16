const express = require("express");
const { register, login } = require("../controllers/auth");

const router = express.Router();

router.use("/register", register);
router.use("/login", login);

module.exports = router;
