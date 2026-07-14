import mongoose from "mongoose";

export const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongo successfully")

    } catch (error) {
      console.log("Error while connecting to mongo", error);
    }
};