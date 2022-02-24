import express from "express";
import mongoose from "mongoose";
import jokes from "./routes/jokes.js";

mongoose.connect("mongodb://localhost:27017/jokes-app");

const app = express();
const port = 3333;

app.use(express.json());

app.use("/jokes", jokes);

app.listen(port, () => {
  console.log(`👏 Listening on port ${port}`);
});
