import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import router from './routes/routes.js';
const app = express();

app.use(cors());

app.use('/',router);

const URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

//mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  //.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
 // .catch((error) => console.log(`${error} did not connect`));
 app.listen(PORT, () => {
  console.log("Server is listening on port 5000....");
});