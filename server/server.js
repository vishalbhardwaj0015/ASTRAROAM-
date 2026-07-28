const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sequelize = require('./config/db');
const Admin = require('./models/Admin');

const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

// Security headers
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

// CORS - env driven
const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(s => s.trim())
  : ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
  origin: corsOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many login attempts. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);
app.use('/api/auth/login', authLimiter);

// API routes
app.get('/', (req, res) => {
  res.json({ success: true, message: 'ASTRAROAM API Running', env: NODE_ENV });
});

app.use('/api/contact', require('./routes/contact'));
app.use('/api/booking', require('./routes/booking'));
app.use('/api/reviews', require('./routes/review'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// Serve frontend in production
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ success: false, message: 'API route not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({
    success: false,
    message: isProduction ? 'Something went wrong!' : err.message,
  });
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    await sequelize.sync();
    console.log('Tables synced');

    const adminExists = await Admin.findOne({ where: { email: 'admin@astraroam.com' } });
    if (!adminExists) {
      await Admin.create({ email: 'admin@astraroam.com', password: 'Astraroam@2024' });
      console.log('Default admin created (admin@astraroam.com / Astraroam@2024)');
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} [${NODE_ENV}]`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

start();
