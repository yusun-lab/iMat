import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://yusun:px9dsLefSrVfGTUF@cluster0.56pxi1l.mongodb.net/iMat"
  );

  console.log("MongoDB connected successfully");
};
