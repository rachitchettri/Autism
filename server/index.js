// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors'); // ✅ Import cors
// const authRoutes = require('./routes/auth');
// const kidRoutes = require('./routes/kid');


// dotenv.config();
// const app = express();

// // ✅ Enable CORS for frontend origin
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));

// app.use(express.json());
// app.use('/api/kids', kidRoutes);

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB error:', err));

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const kidRoutes = require('./routes/kid');

dotenv.config();
const app = express();

// Enable CORS for frontend origin
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Routes (define before MongoDB connection)
app.use('/api/auth', authRoutes);
app.use('/api/kids', kidRoutes);

// Add a test route to verify server is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));