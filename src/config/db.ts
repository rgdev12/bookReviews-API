import mongoose from 'mongoose';

const uri = "mongodb+srv://antonio12admin:btW7grV5n7WQTdJB@cluster0.ukfvk.mongodb.net/book_reviews?retryWrites=true&w=majority&appName=Cluster0";

export const connectetion = mongoose.createConnection(uri).on('open', () => {
  console.log('MongoDB Connected');
}).on('error', () => {
  console.log('MongoDB connection error');
})
