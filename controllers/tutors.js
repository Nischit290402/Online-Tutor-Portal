const Course = require("../models/courses");

//This contains functions of all routes accessed by the tutor, which
//includes getting all courses by that tutor, creating/updating/deleting a course of that logged in tutor.

const getAllCourses = async (req, res) => {
  try {
    const all_courses = await Course.find({});
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOne({ _id: courseID });
    res.status(200).json(course); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCourse = (req, res) => {
  res.send("Update a course");
};

const deleteCourse = (req, res) => {
  res.send("Delete a course");
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
