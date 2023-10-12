const jwt = require("jsonwebtoken");
const botInteractionModel = require("../../models/botModel");
const digitalOfficeModel = require("../../models/digitalOfficeModel");
const DigitalOfficeDataModel = require("../../models/DigitalOfficeDataModel");
const streamModel = require("../../models/streamModel");
const courseModel = require("../../models/CourseModel");
const dotenv = require("dotenv").config();
const adminCredentials = {
  adminid: process.env.ADMIN_ID,
  password: process.env.ADMIN_PASSWORD,
};

module.exports = {
  loginController: async (req, res) => {
    const data = req.body;
    try {
      if (data.adminid != adminCredentials.adminid) {
        res.status(200).send({ message: "ID Mismatch", success: false });
      } else {
        if (data.password === adminCredentials.password) {
          const token = jwt.sign({ id: data.adminid }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
          res
            .status(200)
            .send({ message: "Login Success", success: true, token });
        } else {
          res
            .status(200)
            .send({ message: "Password Mismatch", success: false });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: `admin login controller ${error.message}`,
        success: false,
      });
    }
  },
  fetchBotInteraction: async (req, res) => {
    try {
      const interactions = (await botInteractionModel.find()).reverse();
      res
        .status(200)
        .send({ message: "fetch succesful", interactions, success: true });
    } catch (err) {
      console.log("error at admin fetch bot interaction");
      console.log(err);
    }
  },
  digitalOfficeForm: async (req, res) => {
    const data = req.body;
    try {
      //   {
      //     "countries":[{"name":"Canada"}],
      //     "proficiency":[{"proficiency":"IELTS"}],
      //     "counsellingModes":[{"mode":"Zoom Meeting"}],
      //     "qualifications":[{"qualification":"Plus Two"}]
      // }
      const digitalOfficeData = await digitalOfficeModel.findOne({});
      if (data.field === "Qualification") {
        digitalOfficeData.qualifications.push({
          qualification: data.inputValue,
        });
      } else if (data.field === "Language-Proficiecy") {
        digitalOfficeData.proficiency.push({ proficiency: data.inputValue });
      } else if (data.field === "Country") {
        console.log(data.inputValue);
        const CountryData = data.inputValue.split(" ");
        digitalOfficeData.countries.push({
          name: CountryData[0],
          flag: CountryData[1],
        });
      } else if (data.field === "Counselling-Mode") {
        digitalOfficeData.counsellingModes.push({ mode: data.inputValue });
      }
      //   const form = new digitalOfficeModel(data)
      await digitalOfficeData.save().then((response) => {
        res
          .status(201)
          .send({ msg: "Succesfully added", success: true, response });
      });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ msg: "error at digital office form", success: false, err });
    }
  },
  digitalOfficeGet: async (req, res) => {
    try {
      const data = await digitalOfficeModel.findOne({});
      res.status(200).send({ msg: "Succesfully fetched", success: true, data });
    } catch (err) {
      res.status(500).send({
        msg: "error while fetching data at digital office",
        success: false,
      });
    }
  },
  digitalOfficeDelete: async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
      const digitalOfficeData = await digitalOfficeModel.findOne({});
      if (data.field === "Qualification") {
        console.log(data.value);
        digitalOfficeData.qualifications =
          digitalOfficeData.qualifications.filter(
            (item) => item.qualification !== data.value
          );
      } else if (data.field === "Language-Proficiecy") {
        digitalOfficeData.proficiency = digitalOfficeData.proficiency.filter(
          (item) => item.proficiency !== data.value
        );
      } else if (data.field === "Country") {
        digitalOfficeData.countries = digitalOfficeData.countries.filter(
          (item) => item.name !== data.value
        );
      } else if (data.field === "Counselling-Mode") {
        digitalOfficeData.counsellingModes =
          digitalOfficeData.counsellingModes.filter(
            (item) => item.mode !== data.value
          );
      }
      await digitalOfficeData.save().then((response) => {
        res
          .status(201)
          .send({ msg: "Succesfully deleted", success: true, response });
      });
    } catch (err) {
      res.status(500).send({
        msg: "error while fetching data at digital office",
        success: false,
        err,
      });
    }
  },
  digitalOfficeDataGet: async (req, res) => {
    console.log("call");
    try {
      const data = (await DigitalOfficeDataModel.find()).reverse();
      res
        .status(200)
        .send({ msg: "data fetch succesful", success: true, data });
    } catch (err) {
      res.status(500).send({
        msg: "error occurred while fetching data from digital office data",
        success: false,
      });
    }
  },
  getCountriesStream: async (req, res) => {
    try {
      const data = await digitalOfficeModel.findOne({}, "countries");
      const countries = data?.countries;
      res
        .status(200)
        .send({ msg: "data fetch successful", success: true, countries });
    } catch (err) {
      res.status(500).send({
        msg: "error while fetching countries-stream",
        success: false,
        err,
      });
    }
  },
  addStream: async (req, res) => {
    const data = req.body;
    try {
      const multipleStreams = data.streamTitle.split(",");

      if (multipleStreams.length > 1) {
        // If there are multiple stream titles
        const newStreams = multipleStreams.map((streamTitle) => ({
          streamTitle,
          countries: data.countries, // Assuming countries data is available in req.body
        }));

        // Insert multiple stream documents into the database
        await streamModel.insertMany(newStreams);
      } else {
        // If there's only one stream title
        const newStream = new streamModel(data);
        await newStream.save();
      }

      const streams = await streamModel.find();
      res.status(201).send({
        msg: "Successfully added stream(s)",
        success: true,
        streams,
      });
    } catch (err) {
      res.status(500).send({
        msg: "There was an error while adding the stream(s)",
        success: false,
        err,
      });
    }
  },
  getStreams: async (req, res) => {
    try {
      const streams = await streamModel.find();
      res
        .status(200)
        .send({ msg: "successfully added stream", success: true, streams });
    } catch (err) {
      res.status(500).send({
        msg: "there was an error while fetching the streams",
        success: false,
        err,
      });
    }
  },
  getStreamCourses: async (req, res) => {
    try {
      const streams = await streamModel.find({}, "streamTitle");
      const streamTitles = streams.map((stream) => ({
        streamtitle: stream.streamTitle,
      })); // Map to an array of objects
      res.status(200).send({
        msg: "Successfully fetched stream titles",
        success: true,
        streamTitles,
      });
    } catch (err) {
      res.status(500).send({
        msg: "There was an error while fetching the stream titles",
        success: false,
        err,
      });
    }
  },
  PostCourses: async (req, res) => {
    const data = req.body;
    try {
      // const newCourse = new courseModel(data);
      // await newCourse.save();
      // const Courses = await courseModel.find();
      // res
      //   .status(201)
      //   .send({ msg: "Course post successful", success: true, Courses });

      const multipleCourses = data.course.split(",");

      if (multipleCourses.length > 1) {
        // If there are multiple stream titles
        const Courses = multipleCourses.map((course) => ({
          course,
          countries: data.countries,
          streams: data.streams, // Assuming countries data is available in req.body
        }));

        // Insert multiple stream documents into the database
        await courseModel.insertMany(Courses);
      } else {
        // If there's only one stream title
        const newCourse = new courseModel(data);
        await newCourse.save();
      }

      const Courses = await courseModel.find();
      res.status(201).send({
        msg: "Successfully added course(s)",
        success: true,
        Courses,
      });
    } catch (err) {
      res.status(500).send({
        msg: "There was an error while posting courses",
        success: false,
        err,
      });
    }
  },
  getCourses: async (req, res) => {
    try {
      const Courses = await courseModel.find();
      res
        .status(200)
        .send({ msg: "Courses fetch succesful", success: false, Courses });
    } catch (err) {
      res.status(500).send({
        msg: "There was an error while fetching the courses",
        success: false,
        err,
      });
    }
  },
  deleteStream: async (req, res) => {
    const streamTitle = req.body.title;
    try {
      const deletedStream = await streamModel.findOneAndRemove({ streamTitle });
      if (deletedStream) {
        const streams = await streamModel.find();
        res
          .status(200)
          .send({ msg: "items delete successful", success: true, streams });
      } else {
        res
          .status(200)
          .send({ msg: "items delete unsuccessful", success: false });
      }
    } catch (error) {
      res.status(500).send({
        msg: "There was an error while deleting the stream",
        success: false,
        error,
      });
    }
  },
  deleteCourse: async (req, res) => {
    const course = req.body.title;
    try {
      const deletedCourse = await courseModel.findOneAndRemove({ course });
      if (deletedCourse) {
        const courses = await courseModel.find();
        res
          .status(200)
          .send({ msg: "items delete successful", success: true, courses });
      } else {
        res
          .status(200)
          .send({ msg: "items delete unsuccessful", success: false });
      }
    } catch (error) {
      res.status(500).send({
        msg: "There was an error while deleting the courses",
        success: false,
        error,
      });
    }
  },
};
