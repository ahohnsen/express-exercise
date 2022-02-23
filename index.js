import express from "express";
import jokes from "./routes/jokes.js";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/jokes", jokes);

app.listen(port, () => {
  console.log(`👏 Listening on port ${port}`);
});
