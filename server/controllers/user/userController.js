const courseModel = require("../../models/CourseModel");
const DigitalOfficeDataModel = require("../../models/DigitalOfficeDataModel");
const botInteractionModel = require("../../models/botModel");
const streamModel = require("../../models/streamModel");

module.exports = {
  botResponse: async (req, res) => {
    const [name, phone, email, course, country] = req.body;
    const data = {
      name,
      phone,
      email,
      course,
      country,
    };
    console.log(data);
    try {
      const newInput = new botInteractionModel(data);
      await newInput.save();
      res.status(201).send({ message: "saved Successfully", success: true });
    } catch (erre) {
      res
        .status(500)
        .send({ msg: "error while saving the bot response", success: false });
    }
  },
  digitalOffice: async (req, res) => {
    console.log(req.body);
    const data = req.body;
    try {
      const newInput = new DigitalOfficeDataModel(data);
      await newInput.save();
      res
        .status(201)
        .send({ msg: "formINput saved succesfully", success: true });
    } catch (err) {
      res
        .status(500)
        .send({ msg: "error while saving the fotm Data", success: false });
    }
  },
  fetchStreams: async (req, res) => {
    const country = req.params.id;
    try {
      let streams;
      if (country !== "null") {
        streams = await streamModel.find({ countries: country });
      }
      res
        .status(200)
        .send({ msg: "the fetch is successfull", success: true, streams });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ msg: "Error while fetching streams", success: false, err });
    }
  },
  fetchCourses:async(req,res)=>{
    const data = req.params.id.split('-');
    const country=data[0]
    const stream =data[1]
    try {
      let courses;
      if (data.length>1) {
        courses = await courseModel.find({
          $and: [
            { countries: country },
            { 'streams.streamtitle': stream },
          ],
        });
      }
      console.log(courses);
      res
        .status(200)
        .send({ msg: "the fetch is successfull", success: true, courses });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ msg: "Error while fetching streams", success: false, err });
    }
  }
};
