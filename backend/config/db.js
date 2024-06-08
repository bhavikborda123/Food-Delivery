import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bhavikborda123:Bhavik123@fooddelivery.quwkwyn.mongodb.net/food-delivery"
  ).then(()=>console.log("DB Connected"));
};
