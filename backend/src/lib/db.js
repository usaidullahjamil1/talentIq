import mongoose from "mongoose";
import { ENV } from "./env.js";
console.log("DB_URL from ENV ===>", ENV.DB_URL);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("Connected to Mongoose", conn.connection.host);
  } catch (err) {
    console.log("Error database: ", err);
    process.exit(1); //0=success 1=fail
  }
};
