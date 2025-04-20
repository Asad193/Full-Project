const express = require("express");
const { parseResume } = require("../Controllers/parseController");
const router = express.Router();

router.post("/", parseResume);

module.exports = router;
