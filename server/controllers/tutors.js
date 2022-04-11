const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const login_info = {
  email: "tutor2@gmail.com",
  role: "tutor",
  name: "tutor1",
};

const { findOneAndUpdate } = require("../models/courses");
const Course = require("../models/courses");

//This contains functions of all routes accessed by the tutor, which
//includes getting all courses by that tutor, creating/updating/deleting a course of that logged in tutor.

const getAllCourses = async (req, res) => {
  //Get all courses by that tutor
  try {
    const all_courses = await Course.find({ tutor_email: login_info.email });
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
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
  try {
    const data = req.body;
    data.tutor_email = login_info.email;

    const course = await Course.create(data);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};

//change findOneAndUpdate
const updateCourse = async (req, res) => {
  // Not updating course currently
  try {
    const { id: courseID } = req.params;
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

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
