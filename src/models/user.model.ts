import mongoose from "mongoose";
import { connectetion } from '../config/db';
import { encrypt } from '../utils';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
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

userSchema.pre("save", async function() {
  let user = this;
  const hashPass = await encrypt(user.password);

  user.password = hashPass;
});

export const userModel = connectetion.model('user', userSchema);
