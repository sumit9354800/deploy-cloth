const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const paymentRoutes = require('./routes/paymentRoutes');
// const orderRoutes = require('./routes/orderRoutes');

// Environment variables load karo
dotenv.config();

// Express app create karo
const app = express();


// Database se connect karo
connectDB();

// Middlewares (Bich mein kaam karne wale functions)
// Configure CORS origins via env: FRONTEND_URLS as comma separated list
const frontendUrls = (process.env.FRONTEND_URLS || 'http://localhost:3000').split(',').map(u => u.trim());
console.log('Allowed frontend origins:', frontendUrls);
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps, curl)
    if (!origin) return callback(null, true);
    if (frontendUrls.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    // If not allowed, return CORS error
    const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
    console.error('CORS blocked origin:', origin);
    return callback(new Error(msg), false);
  },
  credentials: true,
}));
app.use(express.json()); // JSON data parse karo
app.use(express.urlencoded({ extended: true })); // Form data parse karo
app.use(cookieParser()); // Cookies parse karo

// Basic test route
app.get('/', (req, res) => {
  res.send('Clothing E-Commerce API is running...');
});

// Routes (Baad mein add karenge)
// app.use('/api/auth', authRoutes);

// Import routes
const authRoutes = require('./routes/authRoutes');
// Routes
app.use('/api/auth', authRoutes);

// app.use('/api/products', productRoutes);
// Import routes ke section mein ye line add karo
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
// Import routes section mein ye line add karo
const orderRoutes = require('./routes/orderRoutes');

// Routes section mein ye line add karo
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
// Routes section mein ye line add karo
app.use('/api/orders', orderRoutes);

// app.use('/api/payment', paymentRoutes);
// app.use('/api/orders', orderRoutes);
// Port define karo
const PORT = process.env.PORT || 5000;

// Server start karo
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Global error handlers for better debugging
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  if (process.env.NODE_ENV === 'production') process.exit(1);
});