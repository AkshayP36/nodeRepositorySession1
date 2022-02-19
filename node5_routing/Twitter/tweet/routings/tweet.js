
const express = require("express");
const controller = require("../controllers/tweet");
const isAuthorized = require("../../middlewares/auth");

const router = express.Router();

router.post("/", isAuthorized, controller.postTweet);

module.exports = router;