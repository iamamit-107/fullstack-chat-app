const express = require("express");
const { getUsers } = require("../controllers/usersController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtml("Users"), getUsers);

module.exports = router;
