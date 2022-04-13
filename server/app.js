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
const WebSockets=require("./Websockets");
const userRouter =require( "./routes/user");
const chatRoomRouter =require( "./routes/chatroom.js");
const http=require("http");
const cors=require('cors');
app.use(cors());
require('dotenv').config()

const Tutor = require("./models/tutors");
const { log } = require("async");

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
app.use("/user", userRouter);
app.use("/room",  chatRoomRouter);
app.use("/all", allRoutes);
app.use("/subject", subjectRoutes);
// process.env.CONNECTION_STRING
port = process.env.port || 5000;

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    // app.listen(process.env.PORT, () => {
    //   console.log("Server is listening on port 5000....");
    // });
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();

const utc = new Date().toJSON().slice(0, 10);
console.log(utc);


/** Create HTTP server. */
const server = http.createServer(app);
const socketio=require("socket.io")(server,{
  cors:{
    origin:'*',
  }
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
// global.io.on('connection', WebSockets.connection)
global.io.on("connection", (socket) => {
  //when ceonnect
  // console.log("a user connected.");

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    // global.io.emit("getUsers", users);
  });

  //when disconnect
  socket.on("disconnect", () => {
    // console.log("a user disconnected!");
    removeUser(socket.id);
    // global.io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", (userId,text) => {
    global.io.emit("getMessage", {
      userId,text,
    });
  });

  //when disconnect
  // socket.on("disconnect", () => {
  //   console.log("a user disconnected!");
  //   removeUser(socket.id);
  //   global.io.emit("getUsers", users);
  // });
});
/** Listen on provided port, on all network interfaces. */
server.listen(5000);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:5000/`)
});