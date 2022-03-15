const Course = require("../models/courses");

//This contains functions of all routes accessed by the parents, which
//includes getting all courses available, and enrolling/unenrolling their child from a course.

const getAllCourses = async (req, res) => {
  //Get all courses
  try {
    const all_courses = await Course.find({});
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllTutors = async (req, res) => {
  res.send("All tutors Info");
};

module.exports = {
  getAllCourses,
  getAllTutors,
};
