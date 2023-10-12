const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema({
  streamTitle:String,
  countries: [String]
});

const streamModel = mongoose.model("Streams", streamSchema);

module.exports = streamModel;
