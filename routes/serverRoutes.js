const express = require("express");
const serverControllers = require("../controllers/serverControllers");

const router = express.Router();

router.post("/", serverControllers.create);

router.put("/:id", serverControllers.update)

module.exports = router;