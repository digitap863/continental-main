const mongoose = require("mongoose");

const digitalOfficeSchema = new mongoose.Schema({
  countries: [
    {
      name: String,
      flag:String,
      _id: false,
    },
  ],
  proficiency: [
    {
      proficiency: String,
      _id: false,
    },
  ],
  counsellingModes: [
    {
      mode: String,
      _id: false,
    },
  ],
  qualifications: [
    {
      qualification: String,
      _id: false,
    },
  ],
});

const digitalOfficeModel = mongoose.model("DigitalOffice", digitalOfficeSchema);

module.exports = digitalOfficeModel;
