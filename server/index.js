const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// ✅ Hardcoded Mongo URI & JWT secret
const MONGO_URI = 'mongodb+srv://rachitdatabase:Y9dkoWtik3aMqkJx@mern-admin.q6jrrbp.mongodb.net/?retryWrites=true&w=majority';
global.JWT_SECRET = 'YourSuperSecretKey';

const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/games');
const quoteRoutes = require('./routes/quotes');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount your routes
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/quotes', quoteRoutes);

// ✅ Connect to MongoDB — using the variable!
async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB connection failed:`, err.message);
    process.exit(1);
  }
  
}

connectDB();

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
