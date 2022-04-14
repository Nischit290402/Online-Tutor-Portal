const login_info = {
  email: "student1@gmail.com",
  role: "student",
  name: "student1",
};

const Course = require("../models/courses");
const Enrolled = require("../models/enrolled");

//Get All Enrolled Courses
const getAllCourses = async (req, res) => {
  try {
    const all_courses = await Enrolled.find({
      student_email: login_info.email,
    });
    res.status(200).json(all_courses);
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
