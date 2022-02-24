import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Person', schema);
