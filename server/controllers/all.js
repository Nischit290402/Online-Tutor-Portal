const Course = require("../models/courses");

//Get All Course Data from Database
const getAllCourses = async (req, res) => {
  try {
    const all_courses = await Course.find({});
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCourses,
};
