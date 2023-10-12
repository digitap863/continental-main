const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course:String,
  countries: [String],
  streams:[{streamtitle:String}]
});

const courseModel = mongoose.model("Courses", courseSchema);

module.exports = courseModel;
