import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import app from './app.js';
dotenv.config();
main()
  .then(() => {
    console.log("Database Connected ...");
    app.listen(process.env.PORT, () => {
      console.log(`Server working on : http://127.0.0.1:3000`);
    });
  })
  .catch((err) => {
    console.log("Error Occurred");
  });

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}




