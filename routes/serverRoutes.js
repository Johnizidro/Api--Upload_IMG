const express = require("express");
const serverControllers = require("../controllers/serverControllers");
const { SerVerSchema } = require("../validations/serverValidations");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post("/", validate(SerVerSchema), serverControllers.create);

router.put("/:id", validate(SerVerSchema), serverControllers.update);

module.exports = router;
