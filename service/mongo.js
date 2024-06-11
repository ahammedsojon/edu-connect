import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("db connected successfully.");
  } catch (error) {
    console.log(error.message);
  }
}
