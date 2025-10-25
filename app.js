const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const restoranRoutes = require('./routes/restoranRoutes');

const app = express();

// middleware
app.use(express.json());
// koneksi Database
connectDB();

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/restoran', restoranRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Jalankan Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));