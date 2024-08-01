import mongoose from "mongoose";


const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error connecting to MongoDb", error.message);
    }
}

export default connectMongoDB;