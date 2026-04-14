import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import docRoutes from "./routes/docRoutes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Mongo Connected");
  } catch (err) {
    console.log("DB connection failed");
    process.exit(1);
  }
};

connectDB();

app.use("/api/v1/user", authRoutes);
app.use("/api/v1/doctor", docRoutes);

app.listen(3000);
