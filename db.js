require("dotenv").config();
const mongoose = require("mongoose");
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_USERNAME;
const url = `mongodb+srv://${username}:${password}@backenddb.k4asq.mongodb.net/?retryWrites=true&w=majority&appName=${name}`;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connected successfully");
  } catch (error) {
    console.error("database connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
