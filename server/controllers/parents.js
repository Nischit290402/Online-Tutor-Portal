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
const { log } = require("async");

//Get All Course Data
const getAllCourses = async (req, res) => {
  //Get parameter
  const { uid: user_email } = req.params;
  try {
    //Get Login Info
    const get_parent = await Parent.findOne({ email: user_email });
    if (get_parent && get_parent?.name) {
      login_info.email = user_email;
      login_info.name = get_parent.name;
      login_info.child_email = get_parent.student_email;
      console.log(login_info);
    }
    //Get Courses from Database
    const all_courses = await Course.find({});
    res.status(200).json(all_courses); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get a particular course using CourseID
const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOne({ _id: courseID });
    res.status(200).json(course);
  } catch (err) {
    //Error handling
    res.status(500).json(err);
  }
};

const utc = new Date().toJSON().slice(0, 10);

//Enroll Student in a course
const enrollCourse = async (req, res) => {
  //Get Parameters
  const { id: courseID, uid: user_email } = req.params;
  try {
    //Get Login Info
    const get_parent = await Parent.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_parent.name;
    login_info.child_email = get_parent.student_email;

    //Check if course is valid
    const find_course = await Course.findOne({ _id: courseID });

    if (find_course.length == 0) {
      res.send(`Course with id: ${courseID} not found`); // 500 status
    }

    //Share Course Drive Folder with Student
    sharefolder_read(find_course.driveURL, login_info.child_email); ///
    const enroll_data = {
      course_ID: courseID,
      student_email: login_info.child_email,
      date_of_enrollment: utc,
    };

    //Enroll in Database
    const enrolled_course = await Enrolled.create(enroll_data);
    res.send(enrolled_course);
  } catch (err) {
    //Handle errors
    res.status(500).send(err);
  }
};

//Unenroll Course
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

//Check if a student is enrolled in a course
const checkEnroll = async (req, res) => {
  //Get Parameters
  const { id: courseID, uid: user_email } = req.params;
  try {
    //Get Login Info
    const get_parent = await Parent.findOne({ email: user_email });
    login_info.email = user_email;
    login_info.name = get_parent.name;
    login_info.child_email = get_parent.student_email;

    //Check if student is enrolled in Database
    const check = await Enrolled.find({
      course_ID: courseID,
      student_email: login_info.child_email,
    });

    //Send Result
    if (check.length === 0) {
      res.send("false");
    } else {
      res.send("true");
    }
  } catch (err) {
    //Handle Errors
    res.status(500).send(err);
  }
};

//Get all courses in which the student is enrolled
const getAllEnrolledCourses = async (req, res) => {
  //Get Parameter(User email)
  const { uid: user_email } = req.params;

  try {
    //Get parent details
    const get_parent = await Parent.findOne({ email: user_email });
    if (get_parent && get_parent?.name) {
      login_info.email = user_email;
      login_info.name = get_parent.name;
      login_info.child_email = get_parent.student_email;
    }
    //Get enrolled details
    const all_enrolled = await Enrolled.find({
      student_email: login_info.child_email,
    });
    //Get Courses from enrolled details
    let all_courses = [];
    for (let i = 0; i < all_enrolled.length; i++) {
      let one_course = await Course.findOne({ _id: all_enrolled[i].course_ID });
      all_courses.push(one_course);
    }
    console.log(all_courses);
    res.status(200).json(all_courses);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  enrollCourse,
  unenrollCourse,
  checkEnroll,
  getAllEnrolledCourses,
};
