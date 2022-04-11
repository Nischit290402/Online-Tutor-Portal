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

const getUserByEmail=async(req,res)=>{
  try {
    const {email:email}=req.params;
    const user=await User.findOne({
      email:email,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

const UserModel =require('../models/users');

const onGetAllUsers= async (req, res) => {
    try {
      const users = await UserModel.getUsers();
      return res.status(200).json({ success: true, users });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ success: false, error: error })
    }
  };
  const onGetUserById= async (req, res) => {
    try {
      const user = await UserModel.getUserById(req.params.id);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  };
const  onCreateUser= async (req, res) => {
    try {
      // const validation = makeValidation(types => ({
      //   payload: req.body,
      //   checks: {
      //     firstName: { type: types.string },
      //     lastName: { type: types.string },
      //     type: { type: types.enum, options: { enum: USER_TYPES } },
      //   }
      // }));
      // if (!validation.success) return res.status(400).json({ ...validation });

      const { firstName, lastName, type } = req.body;
      const user = await UserModel.createUser(firstName, lastName, type);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error })
    }
  };
  const onDeleteUserById= async (req, res) => {
    try {
      const user = await UserModel.deleteByUserById(req.params.id);
      return res.status(200).json({ 
        success: true, 
        message: `Deleted a count of ${user.deletedCount} user.` 
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  };

module.exports = {onDeleteUserById,onCreateUser,onGetAllUsers,onGetUserById, CreateUserAndTutor, CreateParentAndStudent, CheckUser, getUserByEmail };
