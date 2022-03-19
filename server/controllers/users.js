const login_info = {
  email: "tutor1@gmail.com",
  name: "tutor1",
};

const createTutor = async (req, res) => {
  try {
    const data = req.body;
    data.name = login_info.name;
    data.email = login_info.email;
    data.role = "tutor";
    const user = await User.create(data);
    const tutor = await Tutor.create(data);

    res.status(201).json({ user: user, tutor: tutor });
  } catch (err) {
    res.status(500).json(err);
  }
};
