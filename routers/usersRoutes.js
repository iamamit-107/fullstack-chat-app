const express = require("express");
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controllers/usersController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");
const avatarUpload = require("../middlewares/users/avatarUploads");

const router = express.Router();

// Users page
router.get("/", decorateHtml("Users"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// Delete user
router.delete("/:id", removeUser);

module.exports = router;
