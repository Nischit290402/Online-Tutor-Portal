const login_info = {
  email: "student1@gmail.com",
  role: "student",
  name: "student1",
};

const Course = require("../models/courses");
const Enrolled = require("../models/enrolled");

//This contains functions of all routes accessed by the parents, which
//includes getting all courses available, and enrolling/unenrolling their child from a course.

const getAllCourses = async (req, res) => {
  //Get all courses
  try {
    const all_courses = await Enrolled.find({
      student_email: login_info.email,
    });
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Enrolled.findOne({
      course_ID: courseID,
      student_email: login_info.email,
    });
    res.status(200).json(course); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllCourses, getCourse };
