const login_info = {
  email: "parent2@gmail.com",
  role: "parent",
  name: "parent2",
  child_email: "student2@gmail.com",
};

const Course = require("../models/courses");
const Enrolled = require("../models/enrolled");

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

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOne({ _id: courseID });
    res.status(200).json(course); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

const utc = new Date().toJSON().slice(0, 10);

const enrollCourse = async (req, res) => {
  const { id: courseID } = req.params;
  try {
    const find_course = await Course.find({ _id: courseID });

    console.log(find_course);
    if (find_course.length == 0) {
      res.status(500).send(`Course with id: ${courseID} not found`);
    }
    const enroll_data = {
      course_ID: courseID,
      student_email: login_info.child_email,
      date_of_enrollment: utc,
    };
    const enrolled_course = await Enrolled.create(enroll_data);
    res.send(enrolled_course);
  } catch (err) {
    res.status(500).send(err);
  }
};

const unenrollCourse = async (req, res) => {
  const { id: courseID } = req.params;
  try {
    const unenrolled_course = await Enrolled.findOneAndDelete({
      course_ID: courseID,
    });
    res.send("Course Deleted");
  } catch (err) {
    res.status(500).send(`Cannot Delete: Invalid id: ${courseID} \n ${err}`);
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
};
