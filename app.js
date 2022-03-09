const express = require("express");
const app = express();
const routes = require("./routes/tutors");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Landing page");
});

app.get("/home", (req, res) => {
  res.send("Home");
});

app.use("/tutors", routes);

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
