const express = require("express");
const app = express();

var cors = require("cors");
var multer = require("multer");

const bodyParser = require("body-parser");
const tutorRoutes = require("./routes/tutors");
const parentRoutes = require("./routes/parents");
const studentRoutes = require("./routes/students");
const userRoutes = require("./routes/users");
const allRoutes = require("./routes/all");
const connectDB = require("./db/connect");
const userRouter = require("./routes/user");
const chatRoomRouter = require("./routes/chatroom.js");
const http = require("http");

app.use(cors());
require("dotenv").config();

const Tutor = require("./models/tutors");
const { log } = require("async");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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
app.use("/users", userRoutes);
app.use("/user", userRouter);
app.use("/room", chatRoomRouter);
app.use("/all", allRoutes);
port = process.env.port || 5000;

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();

const utc = new Date().toJSON().slice(0, 10);
console.log(utc);

/** Create HTTP server. */
const server = http.createServer(app);
const socketio = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};
/** Create socket connection */
global.io = socketio.listen(server);
global.io.on("connection", (socket) => {

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
  });

  //when disconnect
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });

  //send and get message
  socket.on("sendMessage", (userId, text) => {
    global.io.emit("getMessage", {
      userId,
      text,
    });
  });

});
/** Listen on provided port, on all network interfaces. */
server.listen(5000);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:5000/`);
});
