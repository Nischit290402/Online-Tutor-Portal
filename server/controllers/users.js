const login_info = {
  email: "tutor4@gmail.com",
  name: "tutor4",
};
const User = require("../models/users");
const Parent = require("../models/parents");
const Student = require("../models/students");

const CreateUserAndTutor = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);
    //Todo: Check if user is already registered.
    const user = await User.create(data);
    const tutor = await Tutor.create(data);

    res.status(201).json({ user: user, tutor: tutor });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const CreateParentAndStudent = async (req, res) => {
  try {
    const parentData = req.body;
    console.log(parentData);
    //Todo: Check if user is already registered.

    const user1 = await User.create(parentData);
    const parent = await Parent.create(parentData);

    const studentData = req.body;
    studentData.email = studentData.student_email;
    studentData.name = studentData.student_name;
    studentData.role = "student";

    const user2 = await User.create(studentData);
    const student = await Student.create(studentData);

    res
      .status(201)
      .json({ user1: user1, parent: parent, user2: user2, student: student });
    console.log(studentData);
    // res.send("Creating Parent and student");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
  // res.send("Creating parent and student");
};

const CheckUser = async (req, res) => {
  try {
    const { id: tutor_email } = req.params;
    const user = await User.findOne({
      email: tutor_email,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { CreateUserAndTutor, CreateParentAndStudent, CheckUser };
