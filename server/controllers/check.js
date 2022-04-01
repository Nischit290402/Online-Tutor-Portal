const checkUser = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOne({
      _id: courseID,
      tutor_email: login_info.email,
    });
    res.status(200).json(course); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  checkUser,
};
