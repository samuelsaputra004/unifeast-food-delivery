import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dbAdmin:rotibakar123@cluster0.tp4ztta.mongodb.net/food-del"
    )
    .then(() => console.log("Database is connected"));
};
