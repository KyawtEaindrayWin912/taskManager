const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  

// Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const authenticate = require('./middleware/authMiddleware')

app.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
  });
  

app.use('/auth', authRoutes);
app.use('/tasks', authenticate, taskRoutes);  // authMiddleware applied here

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
