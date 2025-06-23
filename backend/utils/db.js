import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("server successfully connected to mongoDB");
  } catch (err) {
    console.log(`Error connencting to MongoDB ${err}`);
  }
};
export default connectDB;
