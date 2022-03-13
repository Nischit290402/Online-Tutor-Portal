const express = require("express");
const app = express();
const tutorRoutes = require("./routes/tutors");
const parentRoutes = require("./routes/parents");
const studentRoutes = require("./routes/students");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Landing page");
});

app.get("/api", (req, res) => {
  res.send("Node interaction");
});

app.get("/home", (req, res) => {
  res.send("Home");
});

app.use("/tutors", tutorRoutes);
app.use("/parents", parentRoutes);
app.use("/students", studentRoutes);

port = process.env.port || 5000;
const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    app.listen(5000, () => {
      console.log("Server is listening on port 5000....");
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();

const utc = new Date().toJSON().slice(0, 10);
console.log(utc);
