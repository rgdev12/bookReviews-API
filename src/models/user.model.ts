import mongoose from "mongoose";
import { connectetion } from '../config/db';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const userModel = connectetion.model('user', userSchema);
