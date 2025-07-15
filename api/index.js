import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

// ✅ Use the actual environment variable value (NO QUOTES!)
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

const app = express();

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000!');
});
