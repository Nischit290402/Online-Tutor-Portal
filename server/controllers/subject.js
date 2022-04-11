const subject = require("../models/subject");

const getSubjects = async (req, res) => {
    //Get all courses
    try {
      const all_subject = await subject.find({});
      res.status(200).json(all_subject); // this returns an array. Use {all_courses} to return class/object
    } catch (err) {
      res.status(500).json(err);
    }
  };
  module.exports = {
    getSubjects
  };