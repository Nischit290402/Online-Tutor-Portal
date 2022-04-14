const login_info = {
  email: "tutor4@gmail.com",
  name: "tutor4",
};
const User = require("../models/users");
const Parent = require("../models/parents");
const Student = require("../models/students");
const Tutor = require("../models/tutors");

//Create Tutor
const CreateUserAndTutor = async (req, res) => {
  try {
    const data = req.body;

    const user = await User.create(data);
    const tutor = await Tutor.create(data);

    res.status(201).json({ user: user, tutor: tutor });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// Create Parent and Student
const CreateParentAndStudent = async (req, res) => {
  try {
    const parentData = req.body;
    console.log(parentData);

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
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//Check if user is present in database
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

//Get User details from Database by email
const getUserByEmail = async (req, res) => {
  try {
    const { email: email } = req.params;
    const user = await User.findOne({
      email: email,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UserModel = require("../models/users");

const onGetAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    return res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};
const onGetUserById = async (req, res) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

//Create User in Database
const onCreateUser = async (req, res) => {
  try {
    const { firstName, lastName, type } = req.body;
    const user = await UserModel.createUser(firstName, lastName, type);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};
//Delete user in Database
const onDeleteUserById = async (req, res) => {
  try {
    const user = await UserModel.deleteByUserById(req.params.id);
    return res.status(200).json({
      success: true,
      message: `Deleted a count of ${user.deletedCount} user.`,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

module.exports = {
  onDeleteUserById,
  onCreateUser,
  onGetAllUsers,
  onGetUserById,
  CreateUserAndTutor,
  CreateParentAndStudent,
  CheckUser,
  getUserByEmail,
};
