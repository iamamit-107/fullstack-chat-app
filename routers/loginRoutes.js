const express = require("express");
const { getLogin } = require("../controllers/loginController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUploads");

const router = express.Router();

router.get("/", decorateHtml("Login"), getLogin);
router.post("/", avatarUpload);

module.exports = router;
