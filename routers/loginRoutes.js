const express = require("express");
const { getLogin } = require("../controllers/loginController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUploads");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const router = express.Router();

// users page
router.get("/", decorateHtml("Login"), getLogin);

// add user
router.post("/", avatarUpload, addUserValidators, addUserValidationHandler);

module.exports = router;
