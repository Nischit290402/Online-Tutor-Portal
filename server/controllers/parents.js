const login_info = {
  email: "parent1@gmail.com",
  role: "parent",
  name: "parent1",
  child_email: "student1@gmail.com",
};

const Course = require("../models/courses");
const Parent = require("../models/parents");
const Enrolled = require("../models/enrolled");

const { sharefolder_read } = require("./drive");

//This contains functions of all routes accessed by the parents, which
//includes getting all courses available, and enrolling/unenrolling their child from a course.

//done
const getAllCourses = async (req, res) => {
  //Get all courses
  const { uid: user_email } = req.params;
  try {
    const get_parent = await Parent.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_parent.name;
    login_info.child_email = get_parent.student_email;
    console.log(login_info);

    const all_courses = await Course.find({});
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

//done
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

//ToDo: Check if student is already enrolled
const enrollCourse = async (req, res) => {
  const { id: courseID, uid: user_email } = req.params;
  try {
    const get_parent = await Parent.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_parent.name;
    login_info.child_email = get_parent.student_email;

    const find_course = await Course.find({ _id: courseID });

    console.log(find_course);
    if (find_course.length == 0) {
      res.send(`Course with id: ${courseID} not found`); // 500 status
    }
    // sharefolder_read(find_course.driveURL, login_info.child_email); ///
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
  const { id: courseID, uid: user_email } = req.params;
  try {
    const get_parent = await Parent.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_parent.name;
    login_info.child_email = get_parent.student_email;

    const unenrolled_course = await Enrolled.findOneAndDelete({
      course_ID: courseID,
      student_email: login_info.child_email,
    });
    res.send("Course Deleted");
  } catch (err) {
    res.status(500).send(`Cannot Delete: Invalid id: ${courseID} \n ${err}`);
  }
};

//Resolve error
const checkEnroll = async (req, res) => {
  const { id: courseID, uid: user_email } = req.params;
  try {
    const get_parent = await Parent.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_parent.name;
    login_info.child_email = get_parent.student_email;

    const check = await Enrolled.find({
      course_ID: courseID,
      student_email: login_info.child_email,
    });
    console.log(check);
    if (check.length === 0) {
      res.send("false");
    } else {
      res.send("true");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
  checkEnroll,
};
