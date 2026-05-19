const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    // In production, exit so the process manager can restart/crash
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    // In development, don't exit — allow the server to run and controllers
    // to provide fallback data where applicable.
  }
};

module.exports = connectDB;