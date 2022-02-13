const express = require("express");

const router = express.Router();
const userController = require("../controller/user-controller");

router.put("/",userController.update);
router.get("/:id",userController.getById);

module.exports = router;