const mongoose = require("mongoose");

const botInteractionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  course: String,
  country: String,
  date: {
    type: String, // Store the date as a string
    default: function () {
      // Get the current date and format it as "YYYY-MM-DD"
      const currentDate = new Date();
      return currentDate.toISOString().slice(0, 10);
    },
  },
  time: {
    type: String, // Store the time as a string
    default: function () {
      // Get the current time and format it in 12-hour format with "AM" and "PM"
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      return `${formattedHours}:${minutes} ${ampm}`;
    },
  },
});

const botInteractionModel = mongoose.model("botInteraction", botInteractionSchema);
module.exports = botInteractionModel;
