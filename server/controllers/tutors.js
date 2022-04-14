const { createfolder, sharefolder, uploadfile } = require("./drive");
var multer = require("multer");
const login_info = {
  email: "tutor2@gmail.com",
  role: "tutor",
  name: "tutor1",
};

const fs = require("fs");
const { google } = require("googleapis");
const { async: async2 } = require("async");
const { log } = require("console");

//Get environment variables
require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

//Setup Drive API
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({ version: "v3", auth: oAuth2Client });

const { findOneAndUpdate } = require("../models/courses");
const Course = require("../models/courses");
const Tutor = require("../models/tutors");
const { file } = require("googleapis/build/src/apis/file");

//Get all courses created by the tutor
const getAllCourses = async (req, res) => {
  //Get parameters
  const { uid: user_email } = req.params;
  try {
    //Get Tutor Info
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;

    //Get Course Data from Database
    const all_courses = await Course.find({ tutor_email: login_info.email });
    res.status(200).json(all_courses);
  } catch (err) {
    //Error Handling
    res.status(500).json(err);
  }
};

//Get a particular course
const getCourse = async (req, res) => {
  try {
    //Get Parameters and tutor info
    const { id: courseID, uid: user_email } = req.params;
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;
    console.log(login_info);

    //Get Course Data from database
    const course = await Course.findOne({
      _id: courseID,
      tutor_email: login_info.email,
    });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Create New Course
const createCourse = async (req, res) => {
  const { uid: user_email } = req.params;
  try {
    //Get Tutor Info
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;

    //Create G-Drive Folder for Course
    const data = req.body;
    data.tutor_email = login_info.email;
    data.driveURL = "";
    var fileMetadata = {
      name: req.body.name,
      mimeType: "application/vnd.google-apps.folder",
    };
    var course;
    drive.files.create(
      {
        resource: fileMetadata,
        fields: "id",
      },
      async function (err, file) {
        if (err) {
          // Handle error
          console.log(err);
        } else {
          // console.log("Folder Id: ", file.data.id);
          data.driveURL = file.data.id;
          sharefolder(file.data.id, login_info.email);
          course = await Course.create(data);
        }
      }
    );

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update Course
const updateCourse = async (req, res) => {
  try {
    const { id: courseID, uid: user_email } = req.params;
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;
    console.log(login_info);

    const course_data = req.body;
    const filter = { _id: courseID };
    const update = {
      name: course_data.name,
      description: course_data.description,
    };
    const updated_course = await findOneAndUpdate(filter, update, {
      new: true,
    });
    res.send(updated_course);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Delete Course
const deleteCourse = async (req, res) => {
  const { id: courseID } = req.params;
  try {
    const deleted_course = await Course.findOneAndDelete({ _id: courseID });
    res.send("Course Deleted");
  } catch (err) {
    res.status(500).send(`Cannot Delete: Invalid id: ${courseID} \n ${err}`);
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
