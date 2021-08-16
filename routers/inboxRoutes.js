const express = require("express");
const { getInbox } = require("../controllers/inboxController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtml("Inbox"), getInbox);

module.exports = router;
