const Course = require("../models/courses");

const getAllCourses = (req, res) => {
  res.send("Get all courses");
};

const getCourse = (req, res) => {
  res.send("Get a course");
};

const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
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
