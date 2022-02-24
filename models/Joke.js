import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Joke', schema);
