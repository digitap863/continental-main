const express = require("express");
const {
  loginController,
  fetchBotInteraction,
  digitalOfficeForm,
  digitalOfficeGet,
  digitalOfficeDelete,
  digitalOfficeDataGet,
  getCountriesStream,
  addStream,
  getStreams,
  PostCourses,
  getStreamCourses,
  getCourses,
  deleteStream,
  deleteCourse,
} = require("../controllers/admin/adminController");
const router = express.Router();
router.post("/login", loginController);
router.get("/fetch-bot-interactons", fetchBotInteraction);
router.route("/digital-office").post(digitalOfficeForm).get(digitalOfficeGet);
router.route("/digital-office-delete").post(digitalOfficeDelete);
router.route("/digital-office-data").get(digitalOfficeDataGet);
router.get('/countries-stream',getCountriesStream)
router.route('/stream').post(addStream).get(getStreams)
router.route('/stream-courses').get(getStreamCourses)
router.route('/courses').post(PostCourses).get(getCourses)
router.post('/delete-stream',deleteStream)
router.post('/delete-course',deleteCourse)

module.exports = router;    
