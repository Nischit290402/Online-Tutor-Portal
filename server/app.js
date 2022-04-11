const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const tutorRoutes = require("./routes/tutors");
const parentRoutes = require("./routes/parents");
const studentRoutes = require("./routes/students");
const userRoutes = require("./routes/users");
const allRoutes = require("./routes/all");
const checkRoutes = require("./routes/check");
const subjectRoutes = require("./routes/subject");
const connectDB = require("./db/connect");
require('dotenv').config()

const Tutor = require("./models/tutors");
const { log } = require("async");

const Tutor = require("./models/tutors");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Landing page");
});

app.get("/api/world", (req, res) => {
  res.send("Node React");
});

app.post("/api/world", (req, res) => {
  res.send({ Body: req.body });
});

app.get("/home", (req, res) => {
  res.send("Home");
});

const getAllTutors = async (req, res) => {
  try {
    const all_tutors = await Tutor.find({});
    res.status(200).json(all_tutors); // this returns an array. Use {all_courses} to return class/object
  } catch (err) {
    res.status(500).json(err);
  }
};
app.get("/tutors-info", getAllTutors);

app.use("/tutors", tutorRoutes);
app.use("/parents", parentRoutes);
app.use("/students", studentRoutes);
app.use("/check", checkRoutes);
app.use("/users", userRoutes);
app.use("/all", allRoutes);
app.use("/subject", subjectRoutes);
// process.env.CONNECTION_STRING
port = process.env.port || 5000;

const start = async () => {
  try {
    console.log(process.env)
    await connectDB(process.env.CONNECTION_STRING);
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port 5000....");
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();

const utc = new Date().toJSON().slice(0, 10);
console.log(utc);
