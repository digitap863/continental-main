const express = require("express");
const { botResponse, digitalOffice, fetchStreams, fetchCourses } = require("../controllers/user/userController");
const { digitalOfficeGet } = require("../controllers/admin/adminController");
const router = express.Router();

router.post("/bot-interaction", botResponse);
router.route("/digital-office").get(digitalOfficeGet);
router.route("/digital-office-submit").post(digitalOffice);
router.get('/streams-fetch/:id',fetchStreams)
router.get('/courses-fetch/:id',fetchCourses)
module.exports = router;
