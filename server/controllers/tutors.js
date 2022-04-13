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

require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
// console.log(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN);

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
const Resource = require("../models/resources");
const { file } = require("googleapis/build/src/apis/file");
//This contains functions of all routes accessed by the tutor, which
//includes getting all courses by that tutor, creating/updating/deleting a course of that logged in tutor.

const getAllCourses = async (req, res) => {
  //Get all courses by that tutor
  const { uid: user_email } = req.params;
  try {
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;
    console.log(login_info);

    const all_courses = await Course.find({ tutor_email: login_info.email });
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID, uid: user_email } = req.params;
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;
    console.log(login_info);

    const course = await Course.findOne({
      _id: courseID,
      tutor_email: login_info.email,
    });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createCourse = async (req, res) => {
  const { uid: user_email } = req.params;
  try {
    const get_tutor = await Tutor.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_tutor.name;
    console.log(login_info);
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

//change findOneAndUpdate
const updateCourse = async (req, res) => {
  // Not updating course currently
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

const deleteCourse = async (req, res) => {
  const { id: courseID } = req.params;
  try {
    const deleted_course = await Course.findOneAndDelete({ _id: courseID });
    res.send("Course Deleted");
  } catch (err) {
    res.status(500).send(`Cannot Delete: Invalid id: ${courseID} \n ${err}`);
  }
};
global.f = "";
function setF(z) {
  global.f = z;
}
const uploadFile = async (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "temp");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
      f = file.originalname;
    },
  });
  console.log(f);
  const { id: cid } = req.params;
  // console.log(cid);
  const folder_id = await Course.find({ _id: cid });
  // console.log(folder_id);
  const file_url =
    "https://drive.google.com/drive/folders/" + folder_id + "/" + global.f;
  // const create_resource = await Resource.create({
  //   course_id: cid,
  //   folder_name: folder_id,
  //   file_name: f,
  //   file_url: file_url,
  // });
  // console.log(create_resource);

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("11");
      return res.status(500).json(err);
    } else if (err) {
      console.log("12");
      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  uploadFile,
};
