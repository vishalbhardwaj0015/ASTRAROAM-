const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sequelize = require('./config/db');
const Admin = require('./models/Admin');

dotenv.config();

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://astraroam.onrender.com',
  ],
  credentials: true,
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests. Try again later.' },
});
app.use('/api/', limiter);

app.get('/', (req, res) => {
  res.json({ success: true, message: '🚀 ASTRAROAM API Running' });
});

app.use('/api/contact', require('./routes/contact'));
app.use('/api/booking', require('./routes/booking'));
app.use('/api/reviews', require('./routes/review'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    await sequelize.sync({ alter: true });
    console.log('✅ Tables synced');

    const adminExists = await Admin.findOne({ where: { email: 'admin@astraroam.com' } });
    if (!adminExists) {
      await Admin.create({ email: 'admin@astraroam.com', password: 'Astraroam@2024' });
      console.log('✅ Default admin created (admin@astraroam.com / Astraroam@2024)');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
};

start();
