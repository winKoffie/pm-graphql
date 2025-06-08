const mongoose = require('mongoose');
const connectDD = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, );
    console.log('MongoDB connected successfully');
    console.log(`MongoDB Connection String: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

module.exports = connectDD;