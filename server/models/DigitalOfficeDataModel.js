const mongoose = require("mongoose");

const digitalOfficeDataSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  alternativeNumber: String,
  whatsappNumber: String,
  email: String,
  city: String,
  highestQualification: String,
  languageProficiency: String,
  selectedCountry: String,
  Stream: String,
  Course: String,
  Date: String,
  preferredModeOfCounselling: String,
});

const DigitalOfficeDataModel = mongoose.model(
  "DigitalOfficeData",
  digitalOfficeDataSchema
);
module.exports = DigitalOfficeDataModel;
