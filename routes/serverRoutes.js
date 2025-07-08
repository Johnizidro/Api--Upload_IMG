const express = require("express");
const serverControllers = require("../controllers/serverControllers");

const router = express.Router();

router.post("/", serverControllers.create);

module.exports = router;