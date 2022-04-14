const login_info = {
  email: "student1@gmail.com",
  role: "student",
  name: "student1",
};

const Course = require("../models/courses");
const Student = require("../models/students");
const Enrolled = require("../models/enrolled");

//Get all enrolled courses
const getAllEnrolledCourses = async (req, res) => {
  //Get Parameters
  const { uid: user_email } = req.params;
  try {
    //Get Student Info
    const get_student = await Student.findOne({ email: user_email });
    if (get_student && get_student?.name) {
      login_info.email = user_email;
      login_info.name = get_student.name;
    }
    const all_enrolled = await Enrolled.find({
      student_email: login_info.email,
    });
    //Store Enrolled courses info
    let all_courses = [];
    for (let i = 0; i < all_enrolled.length; i++) {
      let one_course = await Course.findOne({ _id: all_enrolled[i].course_ID });
      all_courses.push(one_course);
    }
    // console.log(all_courses);
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get a particular course
const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Enrolled.findOne({
      course_ID: courseID,
      student_email: login_info.email,
    });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllEnrolledCourses, getCourse };
