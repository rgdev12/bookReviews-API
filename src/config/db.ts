import mongoose from 'mongoose';
import 'dotenv/config';

const uri = process.env.DB_HOST ?? 'http://localhost:54321';

export const connectetion = mongoose.createConnection(uri).on('open', () => {
  console.log('MongoDB Connected');
}).on('error', () => {
  console.log('MongoDB connection error');
})
