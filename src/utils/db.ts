import mongoose from "mongoose";

const connect = async () => {

  try {
    // Attempt to connect to the database with options
    await mongoose.connect(process.env.MONGO_URL);
    console.log("=========> Successfully connected to the database");
  } catch (error) {
    console.log(error);
  }
};
export default connect