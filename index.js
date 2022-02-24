import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jokes from './routes/jokes.js';
import people from './routes/people.js';

dotenv.config();
const { MONGODB_URL = 'mongodb://localhost:27017/jokes-app' } = process.env;

try {
  await mongoose.connect(MONGODB_URL);
  console.log('Connected to MongoDB.');
} catch (error) {
  console.error('ERROR: could not connect.', error.message);
}

const app = express();
const port = 3333;

app.use(express.json());

app.use('/jokes', jokes);
app.use('/people', people);

app.use('*', (error, req, res, next) => {
  res.json(error);
});

app.listen(port, () => {
  console.log(`👏 Listening on port ${port}`);
});
